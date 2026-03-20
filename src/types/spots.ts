import { PaginationParams, ExchangePairIntervalParams, AggregatedIntervalParams } from './common';

export type GetSpotCoinsMarketsParams = PaginationParams;

export interface GetSpotPairsMarketsParams {
  symbol: string;
}

export type GetSpotPriceHistoryParams = ExchangePairIntervalParams;

export interface GetSpotOrderBookBidAskHistoryParams extends ExchangePairIntervalParams {
  range?: string;
}

export interface GetSpotAggregatedOrderBookBidAskHistoryParams extends AggregatedIntervalParams {
  range?: string;
}

export type GetSpotOrderBookHistoryParams = ExchangePairIntervalParams;

export interface GetSpotLargeLimitOrderParams {
  exchange: string;
  symbol: string;
}

export interface GetSpotLargeLimitOrderHistoryParams {
  exchange: string;
  symbol: string;
  startTime: number;
  endTime: number;
  state: number;
}

export type GetSpotTakerBuySellVolumeHistoryParams = ExchangePairIntervalParams;

export interface GetSpotAggregatedTakerBuySellVolumeHistoryParams extends AggregatedIntervalParams {
  unit?: string;
}

export interface GetSpotCvdHistoryParams extends ExchangePairIntervalParams {
  unit?: string;
}

export interface GetSpotAggregatedCvdHistoryParams extends AggregatedIntervalParams {
  unit?: string;
}

export type GetSpotNetflowListParams = PaginationParams;

export interface SpotCoinsMarketItem {
  symbol: string;
  currentPrice: number;
  marketCap: number;
}

export interface SpotPairsMarketItem {
  symbol: string;
  exchangeName: string;
  currentPrice: number;
}
