import { IntervalEnum, TimeRangeParams, PaginationParams } from './common';

export interface GetCoinbasePremiumIndexParams extends TimeRangeParams {
  interval: IntervalEnum;
}

export interface CoinbasePremiumIndexItem {
  time: number;
  premium: number;
  premiumRate: number;
}

export interface GetBitfinexMarginLongShortParams extends TimeRangeParams {
  symbol: string;
  interval: IntervalEnum;
}

export interface BitfinexMarginLongShortItem {
  time: number;
  longQuantity: number;
  shortQuantity: number;
}

export interface GetBorrowInterestRateHistoryParams extends TimeRangeParams {
  exchange: string;
  symbol: string;
  interval: IntervalEnum;
}

export interface BorrowInterestRateItem {
  time: number;
  interestRate: number;
}

export interface GetEconomicCalendarParams {
  startTime?: number;
  endTime?: number;
  language?: string;
}

export interface GetArticleListParams extends PaginationParams {
  startTime?: number;
  endTime?: number;
  language?: string;
}
