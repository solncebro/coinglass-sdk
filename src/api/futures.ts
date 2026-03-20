import { CoinGlassClient } from '../client';
import {
  OhlcItem,
  OhlcVolumeItem,
  TimeSeriesChartData,
  OrderBookBidAskItem,
  AggregatedOrderBookBidAskItem,
  TakerBuySellVolumeItem,
  AggregatedTakerBuySellVolumeItem,
} from '../types/common';
import {
  GetOpenInterestAggregatedHistoryParams,
  GetOpenInterestExchangeHistoryChartParams,
  GetOpenInterestHistoryParams,
  GetOpenInterestExchangeListParams,
  OpenInterestExchangeItem,
  GetOpenInterestAggregatedMarginHistoryParams,
  GetFundingRateHistoryParams,
  GetFundingRateWeightHistoryParams,
  GetFundingRateAccumulatedExchangeListParams,
  FundingRateExchangeItem,
  GetFundingRateArbitrageParams,
  FundingRateArbitrageItem,
  GetLiquidationAggregatedHistoryParams,
  LiquidationAggregatedHistoryItem,
  GetLiquidationHistoryParams,
  LiquidationHistoryItem,
  GetLiquidationCoinListParams,
  LiquidationCoinItem,
  GetLiquidationExchangeListParams,
  LiquidationExchangeItem,
  GetLiquidationOrderParams,
  LiquidationOrderItem,
  GetLiquidationMapParams,
  GetLiquidationAggregatedMapParams,
  GetLiquidationHeatmapParams,
  GetLiquidationExchangeHeatmapParams,
  LiquidationHeatmapData,
  GetLiquidationMaxPainParams,
  GetLongShortRatioHistoryParams,
  GlobalLongShortRatioItem,
  TopAccountLongShortRatioItem,
  TopPositionLongShortRatioItem,
  GetOrderBookBidAskHistoryParams,
  GetAggregatedOrderBookBidAskHistoryParams,
  GetOrderBookHistoryParams,
  GetLargeLimitOrderParams,
  LargeLimitOrderItem,
  GetLargeLimitOrderHistoryParams,
  GetTakerBuySellExchangeListParams,
  TakerBuySellExchangeData,
  GetTakerBuySellRatioHistoryParams,
  GetAggregatedTakerBuySellVolumeHistoryParams,
  GetPriceHistoryParams,
  GetBasisHistoryParams,
  BasisHistoryItem,
  GetCoinsMarketsParams,
  CoinsMarketItem,
  GetPairsMarketsParams,
  PairsMarketItem,
  CoinsPriceChangeItem,
  RsiItem,
  GetSupportedExchangePairsParams,
  ExchangePairItem,
  GetCvdHistoryParams,
  GetAggregatedCvdHistoryParams,
  GetNetPositionHistoryParams,
  GetFootprintHistoryParams,
  GetWhaleIndexHistoryParams,
  GetNetflowListParams,
  GetMovingAverageParams,
  GetMacdIndicatorParams,
  GetBollingerBandsParams,
  GetRsiIndicatorParams,
  GetAverageTrueRangeParams,
  GetFuturesSpotVolumeRatioParams,
} from '../types/futures';

export class FuturesApi {
  constructor(private readonly client: CoinGlassClient) {}

  async getOpenInterestAggregatedHistory(
    params: GetOpenInterestAggregatedHistoryParams,
  ): Promise<OhlcItem[]> {
    return this.client.get('/api/futures/open-interest/aggregated-history', params);
  }

  async getOpenInterestExchangeHistoryChart(
    params: GetOpenInterestExchangeHistoryChartParams,
  ): Promise<TimeSeriesChartData> {
    return this.client.get('/api/futures/open-interest/exchange-history-chart', params);
  }

  async getOpenInterestHistory(params: GetOpenInterestHistoryParams): Promise<OhlcItem[]> {
    return this.client.get('/api/futures/open-interest/history', params);
  }

  async getOpenInterestExchangeList(
    params: GetOpenInterestExchangeListParams,
  ): Promise<OpenInterestExchangeItem[]> {
    return this.client.get('/api/futures/open-interest/exchange-list', params);
  }

  async getOpenInterestAggregatedCoinMarginHistory(
    params: GetOpenInterestAggregatedMarginHistoryParams,
  ): Promise<OhlcItem[]> {
    return this.client.get('/api/futures/open-interest/aggregated-coin-margin-history', params);
  }

  async getOpenInterestAggregatedStablecoinHistory(
    params: GetOpenInterestAggregatedMarginHistoryParams,
  ): Promise<OhlcItem[]> {
    return this.client.get('/api/futures/open-interest/aggregated-stablecoin-history', params);
  }

  async getFundingRateHistory(params: GetFundingRateHistoryParams): Promise<OhlcItem[]> {
    return this.client.get('/api/futures/funding-rate/history', params);
  }

  async getFundingRateOiWeightHistory(
    params: GetFundingRateWeightHistoryParams,
  ): Promise<OhlcItem[]> {
    return this.client.get('/api/futures/funding-rate/oi-weight-history', params);
  }

  async getFundingRateVolWeightHistory(
    params: GetFundingRateWeightHistoryParams,
  ): Promise<OhlcItem[]> {
    return this.client.get('/api/futures/funding-rate/vol-weight-history', params);
  }

  async getFundingRateExchangeList(): Promise<FundingRateExchangeItem[]> {
    return this.client.get('/api/futures/funding-rate/exchange-list');
  }

  async getFundingRateAccumulatedExchangeList(
    params: GetFundingRateAccumulatedExchangeListParams,
  ): Promise<FundingRateExchangeItem[]> {
    return this.client.get('/api/futures/funding-rate/accumulated-exchange-list', params);
  }

  async getFundingRateArbitrage(
    params: GetFundingRateArbitrageParams,
  ): Promise<FundingRateArbitrageItem[]> {
    return this.client.get('/api/futures/funding-rate/arbitrage', params);
  }

  async getLiquidationAggregatedHistory(
    params: GetLiquidationAggregatedHistoryParams,
  ): Promise<LiquidationAggregatedHistoryItem[]> {
    return this.client.get('/api/futures/liquidation/aggregated-history', params);
  }

  async getLiquidationHistory(
    params: GetLiquidationHistoryParams,
  ): Promise<LiquidationHistoryItem[]> {
    return this.client.get('/api/futures/liquidation/history', params);
  }

  async getLiquidationCoinList(
    params: GetLiquidationCoinListParams,
  ): Promise<LiquidationCoinItem[]> {
    return this.client.get('/api/futures/liquidation/coin-list', params);
  }

  async getLiquidationExchangeList(
    params: GetLiquidationExchangeListParams,
  ): Promise<LiquidationExchangeItem[]> {
    return this.client.get('/api/futures/liquidation/exchange-list', params);
  }

  async getLiquidationOrder(params: GetLiquidationOrderParams): Promise<LiquidationOrderItem[]> {
    return this.client.get('/api/futures/liquidation/order', params);
  }

  async getLiquidationMap(params: GetLiquidationMapParams): Promise<unknown> {
    return this.client.get('/api/futures/liquidation/map', params);
  }

  async getLiquidationAggregatedMap(params: GetLiquidationAggregatedMapParams): Promise<unknown> {
    return this.client.get('/api/futures/liquidation/aggregated-map', params);
  }

  async getLiquidationAggregatedHeatmapModel1(
    params: GetLiquidationHeatmapParams,
  ): Promise<LiquidationHeatmapData> {
    return this.client.get('/api/futures/liquidation/aggregated-heatmap/model1', params);
  }

  async getLiquidationAggregatedHeatmapModel2(
    params: GetLiquidationHeatmapParams,
  ): Promise<LiquidationHeatmapData> {
    return this.client.get('/api/futures/liquidation/aggregated-heatmap/model2', params);
  }

  async getLiquidationAggregatedHeatmapModel3(
    params: GetLiquidationHeatmapParams,
  ): Promise<LiquidationHeatmapData> {
    return this.client.get('/api/futures/liquidation/aggregated-heatmap/model3', params);
  }

  async getLiquidationHeatmapModel1(
    params: GetLiquidationExchangeHeatmapParams,
  ): Promise<LiquidationHeatmapData> {
    return this.client.get('/api/futures/liquidation/heatmap/model1', params);
  }

  async getLiquidationHeatmapModel2(
    params: GetLiquidationExchangeHeatmapParams,
  ): Promise<LiquidationHeatmapData> {
    return this.client.get('/api/futures/liquidation/heatmap/model2', params);
  }

  async getLiquidationHeatmapModel3(
    params: GetLiquidationExchangeHeatmapParams,
  ): Promise<LiquidationHeatmapData> {
    return this.client.get('/api/futures/liquidation/heatmap/model3', params);
  }

  async getLiquidationMaxPain(params?: GetLiquidationMaxPainParams): Promise<unknown> {
    return this.client.get('/api/futures/liquidation/max-pain', params);
  }

  async getGlobalLongShortAccountRatioHistory(
    params: GetLongShortRatioHistoryParams,
  ): Promise<GlobalLongShortRatioItem[]> {
    return this.client.get('/api/futures/global-long-short-account-ratio/history', params);
  }

  async getTopLongShortAccountRatioHistory(
    params: GetLongShortRatioHistoryParams,
  ): Promise<TopAccountLongShortRatioItem[]> {
    return this.client.get('/api/futures/top-long-short-account-ratio/history', params);
  }

  async getTopLongShortPositionRatioHistory(
    params: GetLongShortRatioHistoryParams,
  ): Promise<TopPositionLongShortRatioItem[]> {
    return this.client.get('/api/futures/top-long-short-position-ratio/history', params);
  }

  async getOrderBookBidAskHistory(
    params: GetOrderBookBidAskHistoryParams,
  ): Promise<OrderBookBidAskItem[]> {
    return this.client.get('/api/futures/orderbook/ask-bids-history', params);
  }

  async getAggregatedOrderBookBidAskHistory(
    params: GetAggregatedOrderBookBidAskHistoryParams,
  ): Promise<AggregatedOrderBookBidAskItem[]> {
    return this.client.get('/api/futures/orderbook/aggregated-ask-bids-history', params);
  }

  async getOrderBookHistory(params: GetOrderBookHistoryParams): Promise<unknown> {
    return this.client.get('/api/futures/orderbook/history', params);
  }

  async getLargeLimitOrder(params: GetLargeLimitOrderParams): Promise<LargeLimitOrderItem[]> {
    return this.client.get('/api/futures/orderbook/large-limit-order', params);
  }

  async getLargeLimitOrderHistory(
    params: GetLargeLimitOrderHistoryParams,
  ): Promise<LargeLimitOrderItem[]> {
    return this.client.get('/api/futures/orderbook/large-limit-order-history', params);
  }

  async getTakerBuySellExchangeList(
    params: GetTakerBuySellExchangeListParams,
  ): Promise<TakerBuySellExchangeData> {
    return this.client.get('/api/futures/taker-buy-sell-volume/exchange-list', params);
  }

  async getTakerBuySellRatioHistory(params: GetTakerBuySellRatioHistoryParams): Promise<unknown> {
    return this.client.get('/api/futures/aggregatedTakerBuySellVolumeRatio/history', params);
  }

  async getAggregatedTakerBuySellVolumeHistory(
    params: GetAggregatedTakerBuySellVolumeHistoryParams,
  ): Promise<AggregatedTakerBuySellVolumeItem[]> {
    return this.client.get('/api/futures/aggregated-taker-buy-sell-volume/history', params);
  }

  async getTakerBuySellVolumeHistory(
    params: GetTakerBuySellRatioHistoryParams,
  ): Promise<TakerBuySellVolumeItem[]> {
    return this.client.get('/api/futures/v2/taker-buy-sell-volume/history', params);
  }

  async getPriceHistory(params: GetPriceHistoryParams): Promise<OhlcVolumeItem[]> {
    return this.client.get('/api/futures/price/history', params);
  }

  async getBasisHistory(params: GetBasisHistoryParams): Promise<BasisHistoryItem[]> {
    return this.client.get('/api/futures/basis/history', params);
  }

  async getCoinsMarkets(params?: GetCoinsMarketsParams): Promise<CoinsMarketItem[]> {
    return this.client.get('/api/futures/coins-markets', params);
  }

  async getPairsMarkets(params: GetPairsMarketsParams): Promise<PairsMarketItem[]> {
    return this.client.get('/api/futures/pairs-markets', params);
  }

  async getCoinsPriceChange(): Promise<CoinsPriceChangeItem[]> {
    return this.client.get('/api/futures/coins-price-change');
  }

  async getRsiList(): Promise<RsiItem[]> {
    return this.client.get('/api/futures/rsi/list');
  }

  async getSupportedCoins(): Promise<string[]> {
    return this.client.get('/api/futures/supported-coins');
  }

  async getSupportedExchangePairs(
    params?: GetSupportedExchangePairsParams,
  ): Promise<Record<string, ExchangePairItem[]>> {
    return this.client.get('/api/futures/supported-exchange-pairs', params);
  }

  async getSupportedExchanges(): Promise<string[]> {
    return this.client.get('/api/futures/supported-exchanges');
  }

  async getDelistedExchangePairs(): Promise<unknown> {
    return this.client.get('/api/futures/delisted-exchange-pairs');
  }

  async getCvdHistory(params: GetCvdHistoryParams): Promise<unknown> {
    return this.client.get('/api/futures/cvd/history', params);
  }

  async getAggregatedCvdHistory(params: GetAggregatedCvdHistoryParams): Promise<unknown> {
    return this.client.get('/api/futures/aggregated-cvd/history', params);
  }

  async getNetPositionHistory(params: GetNetPositionHistoryParams): Promise<unknown> {
    return this.client.get('/api/futures/net-position/history', params);
  }

  async getNetPositionHistoryV2(params: GetNetPositionHistoryParams): Promise<unknown> {
    return this.client.get('/api/futures/v2/net-position/history', params);
  }

  async getFootprintHistory(params: GetFootprintHistoryParams): Promise<unknown> {
    return this.client.get('/api/futures/volume/footprint-history', params);
  }

  async getWhaleIndexHistory(params: GetWhaleIndexHistoryParams): Promise<unknown> {
    return this.client.get('/api/futures/whale-index/history', params);
  }

  async getNetflowList(params?: GetNetflowListParams): Promise<unknown> {
    return this.client.get('/api/futures/netflow-list', params);
  }

  async getMacdList(): Promise<unknown> {
    return this.client.get('/api/futures/macd/list');
  }

  async getExchangeRank(): Promise<unknown> {
    return this.client.get('/api/futures/exchange-rank');
  }

  async getMovingAverage(params: GetMovingAverageParams): Promise<unknown> {
    return this.client.get('/api/futures/indicators/ma', params);
  }

  async getExponentialMovingAverage(params: GetMovingAverageParams): Promise<unknown> {
    return this.client.get('/api/futures/indicators/ema', params);
  }

  async getMacd(params: GetMacdIndicatorParams): Promise<unknown> {
    return this.client.get('/api/futures/indicators/macd', params);
  }

  async getBollingerBands(params: GetBollingerBandsParams): Promise<unknown> {
    return this.client.get('/api/futures/indicators/boll', params);
  }

  async getRsi(params: GetRsiIndicatorParams): Promise<unknown> {
    return this.client.get('/api/futures/indicators/rsi', params);
  }

  async getAverageTrueRange(params: GetAverageTrueRangeParams): Promise<unknown> {
    return this.client.get('/api/futures/indicators/avg-true-range', params);
  }

  async getFuturesSpotVolumeRatio(params: GetFuturesSpotVolumeRatioParams): Promise<unknown> {
    return this.client.get('/api/futures_spot_volume_ratio', params);
  }
}
