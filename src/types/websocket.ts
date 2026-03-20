import type { WebSocketLogger as EngineWebSocketLogger } from '@solncebro/websocket-engine';

export interface WebSocketSubscribeMessage {
  method: 'subscribe' | 'unsubscribe';
  channelList: string[];
}

export interface WebSocketDataMessage<T> {
  channel: string;
  data: T;
}

export interface WsLiquidationOrderItem {
  baseAsset: string;
  exName: string;
  price: number;
  side: number;
  symbol: string;
  time: number;
  volUsd: number;
}

export interface WsFuturesTradeItem {
  baseAsset: string;
  exName: string;
  price: number;
  side: number;
  symbol: string;
  time: number;
  volUsd: number;
}

export enum LiquidationSideEnum {
  Long = 1,
  Short = 2,
}

export enum TradeSideEnum {
  Sell = 1,
  Buy = 2,
}

export interface SubscribeFuturesTradeParams {
  exchange: string;
  symbol: string;
  minimumVolumeUsd: number;
}

export interface ParsedMessage {
  type: 'pong' | 'data';
  raw: unknown;
}

export type WebSocketLogger = EngineWebSocketLogger;
