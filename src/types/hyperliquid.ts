import { IntervalEnum, TimeRangeParams } from './common';

export interface HyperliquidWhalePositionItem {
  user: string;
  symbol: string;
  positionSize: number;
  entryPrice: number;
  markPrice: number;
  liqPrice: number;
  leverage: number;
  marginBalance: number;
  positionValueUsd: number;
  unrealizedPnl: number;
  fundingFee: number;
  marginMode: string;
  createTime: number;
  updateTime: number;
}

export interface HyperliquidWhaleAlertItem {
  user: string;
  symbol: string;
  positionSize: number;
  entryPrice: number;
  liqPrice: number;
  positionValueUsd: number;
  positionAction: number;
  createTime: number;
}

export interface GetHyperliquidPositionParams {
  symbol: string;
  currentPage?: string;
}

export interface GetHyperliquidUserPositionParams {
  userAddress: string;
}

export interface GetHyperliquidLongShortRatioHistoryParams extends TimeRangeParams {
  symbol: string;
  interval: IntervalEnum;
}
