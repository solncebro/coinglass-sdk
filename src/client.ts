import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {
  ApiResponse,
  CoinGlassClientOptions,
  CoinGlassError,
  RateLimitState,
} from './types/common';

const MAX_LIMIT_HEADER = 'api-key-max-limit';
const USE_LIMIT_HEADER = 'api-key-use-limit';

function camelToSnake(str: string): string {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

function snakeToCamel(str: string): string {
  return str.replace(/_([a-z])/g, (_, letter: string) => letter.toUpperCase());
}

function convertKeysToSnakeCase(params: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      result[camelToSnake(key)] = value;
    }
  }

  return result;
}

function convertKeysToCamelCase(data: unknown): unknown {
  if (Array.isArray(data)) {
    return data.map(convertKeysToCamelCase);
  }

  if (data !== null && typeof data === 'object') {
    const result: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(data as Record<string, unknown>)) {
      result[snakeToCamel(key)] = convertKeysToCamelCase(value);
    }

    return result;
  }

  return data;
}

function toRecord(params: object): Record<string, unknown> {
  return params as Record<string, unknown>;
}

function parseHeaderNumber(response: AxiosResponse, headerName: string): number | null {
  const rawValue = response.headers?.[headerName];

  if (rawValue === undefined || rawValue === null) {
    return null;
  }

  const value = Number(rawValue);

  return Number.isFinite(value) ? value : null;
}

export class CoinGlassClient {
  private readonly instance: AxiosInstance;

  private rateLimitState: RateLimitState | null = null;

  constructor(apiKey: string, options?: CoinGlassClientOptions) {
    this.instance = axios.create({
      baseURL: 'https://open-api-v4.coinglass.com',
      headers: {
        'CG-API-KEY': apiKey,
      },
      ...(options?.timeoutMilliseconds !== undefined
        ? { timeout: options.timeoutMilliseconds }
        : {}),
    });

    this.instance.interceptors.response.use((response) => {
      this.captureRateLimitState(response);

      const body = response.data as ApiResponse<unknown>;

      if (body.code !== '0') {
        const { baseURL = '', url = '', params } = response.config;
        const query = params
          ? '?' +
            Object.entries(params as Record<string, unknown>)
              .map(([k, v]) => `${k}=${v}`)
              .join('&')
          : '';
        const requestUrl = `${baseURL}${url}${query}`;

        throw new CoinGlassError(body.code, body.msg, requestUrl);
      }

      return response;
    });
  }

  async get<T>(path: string, params?: object): Promise<T> {
    const snakeParams = params ? convertKeysToSnakeCase(toRecord(params)) : undefined;
    const response = await this.instance.get<ApiResponse<T>>(path, { params: snakeParams });

    return convertKeysToCamelCase(response.data.data) as T;
  }

  getRateLimitState(): RateLimitState | null {
    return this.rateLimitState;
  }

  private captureRateLimitState(response: AxiosResponse): void {
    const maxLimit = parseHeaderNumber(response, MAX_LIMIT_HEADER);
    const useLimit = parseHeaderNumber(response, USE_LIMIT_HEADER);

    if (maxLimit === null || useLimit === null) {
      return;
    }

    this.rateLimitState = {
      maxLimit,
      useLimit,
      remaining: Math.max(0, maxLimit - useLimit),
      capturedAt: Date.now(),
    };
  }
}
