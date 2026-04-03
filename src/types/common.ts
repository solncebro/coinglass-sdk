export enum IntervalEnum {
  OneMinute = '1m',
  ThreeMinutes = '3m',
  FiveMinutes = '5m',
  FifteenMinutes = '15m',
  ThirtyMinutes = '30m',
  OneHour = '1h',
  FourHours = '4h',
  SixHours = '6h',
  EightHours = '8h',
  TwelveHours = '12h',
  OneDay = '1d',
  OneWeek = '1w',
}

export interface TimeRangeParams {
  limit?: number;
  startTime?: number;
  endTime?: number;
}

export interface PaginationParams {
  perPage?: number;
  page?: number;
}

export interface OhlcItem {
  time: number;
  open: string;
  high: string;
  low: string;
  close: string;
}

export interface OhlcVolumeItem {
  time: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volumeUsd: string;
}

export interface TimeSeriesChartData {
  timeList: number[];
  priceList: number[];
  dataBySeriesName: Record<string, number[]>;
}

export interface ExchangePairIntervalParams extends TimeRangeParams {
  exchange: string;
  symbol: string;
  interval: IntervalEnum;
}

export interface AggregatedIntervalParams extends TimeRangeParams {
  exchangeList: string;
  symbol: string;
  interval: IntervalEnum;
}

export interface OrderBookBidAskItem {
  time: number;
  bidsUsd: number;
  bidsQuantity: number;
  asksUsd: number;
  asksQuantity: number;
}

export interface AggregatedOrderBookBidAskItem {
  time: number;
  aggregatedBidsUsd: number;
  aggregatedBidsQuantity: number;
  aggregatedAsksUsd: number;
  aggregatedAsksQuantity: number;
}

export interface TakerBuySellVolumeItem {
  time: number;
  takerBuyVolumeUsd: number;
  takerSellVolumeUsd: number;
}

export interface AggregatedTakerBuySellVolumeItem {
  time: number;
  aggregatedBuyVolumeUsd: number;
  aggregatedSellVolumeUsd: number;
}

export interface IndexChartData {
  dataList: number[];
  priceList: number[];
  timeList: number[];
}

export interface ApiResponse<T> {
  code: string;
  msg: string;
  data: T;
}

export class CoinGlassError extends Error {
  constructor(
    public readonly code: string,
    message: string,
    public readonly requestUrl?: string,
  ) {
    super(message);
    this.name = 'CoinGlassError';
  }
}
