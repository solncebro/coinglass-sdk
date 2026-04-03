import axios, { AxiosInstance } from 'axios';
import { ApiResponse, CoinGlassError } from './types/common';

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

export class CoinGlassClient {
  private readonly instance: AxiosInstance;

  constructor(apiKey: string) {
    this.instance = axios.create({
      baseURL: 'https://open-api-v4.coinglass.com',
      headers: {
        'CG-API-KEY': apiKey,
      },
    });

    this.instance.interceptors.response.use((response) => {
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
}
