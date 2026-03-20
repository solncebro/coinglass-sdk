import {
  IntervalEnum,
  TimeRangeParams,
  PaginationParams,
  ExchangePairIntervalParams,
  AggregatedIntervalParams,
} from './common';

export interface GetOpenInterestAggregatedHistoryParams extends TimeRangeParams {
  symbol: string;
  interval: IntervalEnum;
  unit?: string;
}

export interface GetOpenInterestExchangeHistoryChartParams {
  symbol: string;
  range: string;
  unit?: string;
}

export interface GetOpenInterestHistoryParams extends ExchangePairIntervalParams {
  unit?: string;
}

export interface GetOpenInterestExchangeListParams {
  symbol: string;
}

export interface OpenInterestExchangeItem {
  openInterestUsd: number;
  openInterestQuantity: number;
  exchangeName: string;
  openInterestChange5m: number;
  openInterestChange15m: number;
  openInterestChange30m: number;
  openInterestChange1h: number;
  openInterestChange4h: number;
  openInterestChange24h: number;
}

export type GetOpenInterestAggregatedMarginHistoryParams = AggregatedIntervalParams;

export type GetFundingRateHistoryParams = ExchangePairIntervalParams;

export interface GetFundingRateWeightHistoryParams extends TimeRangeParams {
  symbol: string;
  interval: IntervalEnum;
}

export interface GetFundingRateAccumulatedExchangeListParams {
  range: string;
}

export interface FundingRateExchangeItem {
  symbol: string;
  stablecoinMarginList: FundingRateMarginItem[];
  tokenMarginList: FundingRateMarginItem[];
}

export interface FundingRateMarginItem {
  exchange: string;
  fundingRateInterval: string;
  fundingRate: number;
  nextFundingTime: number;
}

export interface GetFundingRateArbitrageParams {
  usd: number;
  exchangeList?: string;
}

export interface FundingRateArbitrageItem {
  symbol: string;
  buy: FundingRateArbitrageSide;
  sell: FundingRateArbitrageSide;
  apr: number;
  funding: number;
  fee: number;
  spread: number;
  nextFundingTime: number;
}

export interface FundingRateArbitrageSide {
  exchange: string;
  openInterestUsd: number;
  fundingRateInterval: string;
  fundingRate: number;
}

export type GetLiquidationAggregatedHistoryParams = AggregatedIntervalParams;

export interface LiquidationAggregatedHistoryItem {
  time: number;
  aggregatedLongLiquidationUsd: number;
  aggregatedShortLiquidationUsd: number;
}

export type GetLiquidationHistoryParams = ExchangePairIntervalParams;

export interface LiquidationHistoryItem {
  time: number;
  longLiquidationUsd: number;
  shortLiquidationUsd: number;
}

export interface GetLiquidationCoinListParams {
  exchange: string;
}

export interface LiquidationCoinItem {
  symbol: string;
  liquidationUsd1h: number;
  liquidationUsd4h: number;
  liquidationUsd12h: number;
  liquidationUsd24h: number;
  longLiquidationUsd1h: number;
  longLiquidationUsd4h: number;
  longLiquidationUsd12h: number;
  longLiquidationUsd24h: number;
  shortLiquidationUsd1h: number;
  shortLiquidationUsd4h: number;
  shortLiquidationUsd12h: number;
  shortLiquidationUsd24h: number;
}

export interface GetLiquidationExchangeListParams {
  symbol?: string;
  range: string;
}

export interface LiquidationExchangeItem {
  exchange: string;
  liquidationUsd: number;
  longLiquidationUsd: number;
  shortLiquidationUsd: number;
}

export interface GetLiquidationOrderParams {
  exchange: string;
  symbol: string;
  minLiquidationAmount: string;
  startTime?: number;
  endTime?: number;
}

export interface LiquidationOrderItem {
  exchangeName: string;
  symbol: string;
  baseAsset: string;
  price: number;
  usdValue: number;
  side: number;
  time: number;
}

export interface GetLiquidationMapParams {
  exchange: string;
  symbol: string;
  range: string;
}

export interface GetLiquidationAggregatedMapParams {
  symbol: string;
  range: string;
}

export interface GetLiquidationHeatmapParams {
  symbol: string;
  range: string;
}

export interface GetLiquidationExchangeHeatmapParams {
  exchange: string;
  symbol: string;
  range: string;
}

export interface LiquidationHeatmapData {
  yAxisList: number[];
  liquidationLeverageDataList: number[][];
  priceCandlestickList: number[][];
}

export interface GetLiquidationMaxPainParams {
  range?: string;
}

export type GetLongShortRatioHistoryParams = ExchangePairIntervalParams;

export interface GlobalLongShortRatioItem {
  time: number;
  globalAccountLongPercent: number;
  globalAccountShortPercent: number;
  globalAccountLongShortRatio: number;
}

export interface TopAccountLongShortRatioItem {
  time: number;
  topAccountLongPercent: number;
  topAccountShortPercent: number;
  topAccountLongShortRatio: number;
}

export interface TopPositionLongShortRatioItem {
  time: number;
  topPositionLongPercent: number;
  topPositionShortPercent: number;
  topPositionLongShortRatio: number;
}

export interface GetOrderBookBidAskHistoryParams extends ExchangePairIntervalParams {
  range?: string;
}

export interface GetAggregatedOrderBookBidAskHistoryParams extends AggregatedIntervalParams {
  range?: string;
}

export type GetOrderBookHistoryParams = ExchangePairIntervalParams;

export interface GetLargeLimitOrderParams {
  exchange: string;
  symbol: string;
}

export interface LargeLimitOrderItem {
  id: string;
  exchangeName: string;
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
  price: number;
  startTime: number;
  startQuantity: number;
  startUsdValue: number;
  currentQuantity: number;
  currentUsdValue: number;
  currentTime: number;
  executedVolume: number;
  executedUsdValue: number;
  tradeCount: number;
  orderSide: number;
  orderState: number;
}

export interface GetLargeLimitOrderHistoryParams {
  exchange: string;
  symbol: string;
  startTime: number;
  endTime: number;
  state: number;
}

export interface GetTakerBuySellExchangeListParams {
  symbol: string;
  range: string;
}

export interface TakerBuySellExchangeData {
  symbol: string;
  buyRatio: number;
  sellRatio: number;
  buyVolUsd: number;
  sellVolUsd: number;
  exchangeList: TakerBuySellExchangeItem[];
}

export interface TakerBuySellExchangeItem {
  exchange: string;
  buyRatio: number;
  sellRatio: number;
  buyVolUsd: number;
  sellVolUsd: number;
}

export type GetTakerBuySellRatioHistoryParams = ExchangePairIntervalParams;

export interface GetAggregatedTakerBuySellVolumeHistoryParams extends AggregatedIntervalParams {
  unit?: string;
}

export type GetPriceHistoryParams = ExchangePairIntervalParams;

export type GetBasisHistoryParams = ExchangePairIntervalParams;

export interface BasisHistoryItem {
  time: number;
  openBasis: number;
  closeBasis: number;
  openChange: number;
  closeChange: number;
}

export interface GetCoinsMarketsParams extends PaginationParams {
  exchangeList?: string;
}

export interface CoinsMarketItem {
  symbol: string;
  currentPrice: number;
  avgFundingRateByOi: number;
  avgFundingRateByVol: number;
  marketCapUsd: number;
  openInterestUsd: number;
  openInterestQuantity: number;
  oiChange5m: number;
  oiChange15m: number;
  oiChange30m: number;
  oiChange1h: number;
  oiChange4h: number;
  oiChange12h: number;
  oiChange24h: number;
  priceChange5m: number;
  priceChange15m: number;
  priceChange30m: number;
  priceChange1h: number;
  priceChange4h: number;
  priceChange12h: number;
  priceChange24h: number;
}

export interface GetPairsMarketsParams {
  symbol: string;
}

export interface PairsMarketItem {
  instrumentId: string;
  exchangeName: string;
  currentPrice: number;
  indexPrice: number;
  fundingRate: number;
  nextFundingTime: number;
  openInterestUsd: number;
  openInterestVolumeRatio: number;
}

export interface CoinsPriceChangeItem {
  symbol: string;
  currentPrice: number;
  priceChangePercent5m: number;
  priceChangePercent15m: number;
  priceChangePercent30m: number;
  priceChangePercent1h: number;
  priceChangePercent4h: number;
  priceChangePercent12h: number;
  priceChangePercent24h: number;
  priceAmplitudePercent5m: number;
  priceAmplitudePercent15m: number;
  priceAmplitudePercent30m: number;
  priceAmplitudePercent1h: number;
  priceAmplitudePercent4h: number;
  priceAmplitudePercent12h: number;
  priceAmplitudePercent24h: number;
}

export interface RsiItem {
  symbol: string;
  currentPrice: number;
  rsi15m: number;
  rsi1h: number;
  rsi4h: number;
  rsi12h: number;
  rsi24h: number;
  rsi1w: number;
}

export interface GetSupportedExchangePairsParams {
  exchange?: string;
}

export interface ExchangePairItem {
  instrumentId: string;
  baseAsset: string;
  quoteAsset: string;
}

export type GetCvdHistoryParams = ExchangePairIntervalParams;

export interface GetAggregatedCvdHistoryParams extends AggregatedIntervalParams {
  unit?: string;
}

export type GetNetPositionHistoryParams = ExchangePairIntervalParams;

export type GetFootprintHistoryParams = ExchangePairIntervalParams;

export type GetWhaleIndexHistoryParams = ExchangePairIntervalParams;

export type GetNetflowListParams = PaginationParams;

export type GetIndicatorParams = ExchangePairIntervalParams;

export interface GetMovingAverageParams extends GetIndicatorParams {
  window?: number;
  seriesType?: string;
}

export interface GetMacdIndicatorParams extends GetIndicatorParams {
  seriesType?: string;
  fastWindow?: number;
  slowWindow?: number;
  signalWindow?: number;
}

export interface GetBollingerBandsParams extends GetIndicatorParams {
  seriesType?: string;
  window?: number;
  mult?: number;
}

export interface GetRsiIndicatorParams extends GetIndicatorParams {
  window?: number;
  seriesType?: string;
}

export interface GetAverageTrueRangeParams extends GetIndicatorParams {
  window?: number;
}

export type GetFuturesSpotVolumeRatioParams = AggregatedIntervalParams;
