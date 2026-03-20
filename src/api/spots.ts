import { CoinGlassClient } from '../client';
import {
  OhlcVolumeItem,
  OrderBookBidAskItem,
  AggregatedOrderBookBidAskItem,
  TakerBuySellVolumeItem,
  AggregatedTakerBuySellVolumeItem,
} from '../types/common';
import {
  GetSpotCoinsMarketsParams,
  SpotCoinsMarketItem,
  GetSpotPairsMarketsParams,
  SpotPairsMarketItem,
  GetSpotPriceHistoryParams,
  GetSpotOrderBookBidAskHistoryParams,
  GetSpotAggregatedOrderBookBidAskHistoryParams,
  GetSpotOrderBookHistoryParams,
  GetSpotLargeLimitOrderParams,
  GetSpotLargeLimitOrderHistoryParams,
  GetSpotTakerBuySellVolumeHistoryParams,
  GetSpotAggregatedTakerBuySellVolumeHistoryParams,
  GetSpotCvdHistoryParams,
  GetSpotAggregatedCvdHistoryParams,
  GetSpotNetflowListParams,
} from '../types/spots';
import { ExchangePairItem, LargeLimitOrderItem } from '../types/futures';

export class SpotsApi {
  constructor(private readonly client: CoinGlassClient) {}

  async getSupportedCoins(): Promise<string[]> {
    return this.client.get('/api/spot/supported-coins');
  }

  async getSupportedExchangePairs(): Promise<Record<string, ExchangePairItem[]>> {
    return this.client.get('/api/spot/supported-exchange-pairs');
  }

  async getCoinsMarkets(params?: GetSpotCoinsMarketsParams): Promise<SpotCoinsMarketItem[]> {
    return this.client.get('/api/spot/coins-markets', params);
  }

  async getPairsMarkets(params: GetSpotPairsMarketsParams): Promise<SpotPairsMarketItem[]> {
    return this.client.get('/api/spot/pairs-markets', params);
  }

  async getPriceHistory(params: GetSpotPriceHistoryParams): Promise<OhlcVolumeItem[]> {
    return this.client.get('/api/spot/price/history', params);
  }

  async getOrderBookBidAskHistory(
    params: GetSpotOrderBookBidAskHistoryParams,
  ): Promise<OrderBookBidAskItem[]> {
    return this.client.get('/api/spot/orderbook/ask-bids-history', params);
  }

  async getAggregatedOrderBookBidAskHistory(
    params: GetSpotAggregatedOrderBookBidAskHistoryParams,
  ): Promise<AggregatedOrderBookBidAskItem[]> {
    return this.client.get('/api/spot/orderbook/aggregated-ask-bids-history', params);
  }

  async getOrderBookHistory(params: GetSpotOrderBookHistoryParams): Promise<unknown> {
    return this.client.get('/api/spot/orderbook/history', params);
  }

  async getLargeLimitOrder(params: GetSpotLargeLimitOrderParams): Promise<LargeLimitOrderItem[]> {
    return this.client.get('/api/spot/orderbook/large-limit-order', params);
  }

  async getLargeLimitOrderHistory(
    params: GetSpotLargeLimitOrderHistoryParams,
  ): Promise<LargeLimitOrderItem[]> {
    return this.client.get('/api/spot/orderbook/large-limit-order-history', params);
  }

  async getTakerBuySellVolumeHistory(
    params: GetSpotTakerBuySellVolumeHistoryParams,
  ): Promise<TakerBuySellVolumeItem[]> {
    return this.client.get('/api/spot/taker-buy-sell-volume/history', params);
  }

  async getAggregatedTakerBuySellVolumeHistory(
    params: GetSpotAggregatedTakerBuySellVolumeHistoryParams,
  ): Promise<AggregatedTakerBuySellVolumeItem[]> {
    return this.client.get('/api/spot/aggregated-taker-buy-sell-volume/history', params);
  }

  async getCvdHistory(params: GetSpotCvdHistoryParams): Promise<unknown> {
    return this.client.get('/api/spot/cvd/history', params);
  }

  async getAggregatedCvdHistory(params: GetSpotAggregatedCvdHistoryParams): Promise<unknown> {
    return this.client.get('/api/spot/aggregated-cvd/history', params);
  }

  async getNetflowList(params?: GetSpotNetflowListParams): Promise<unknown> {
    return this.client.get('/api/spot/netflow-list', params);
  }
}
