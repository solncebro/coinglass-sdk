import { CoinGlassClient } from '../client';
import {
  GetCoinbasePremiumIndexParams,
  CoinbasePremiumIndexItem,
  GetBitfinexMarginLongShortParams,
  BitfinexMarginLongShortItem,
  GetBorrowInterestRateHistoryParams,
  BorrowInterestRateItem,
  GetEconomicCalendarParams,
  GetArticleListParams,
} from '../types/other';

export class OtherApi {
  constructor(private readonly client: CoinGlassClient) {}

  async getCoinbasePremiumIndex(
    params: GetCoinbasePremiumIndexParams,
  ): Promise<CoinbasePremiumIndexItem[]> {
    return this.client.get('/api/coinbase-premium-index', params);
  }

  async getBitfinexMarginLongShort(
    params: GetBitfinexMarginLongShortParams,
  ): Promise<BitfinexMarginLongShortItem[]> {
    return this.client.get('/api/bitfinex-margin-long-short', params);
  }

  async getBorrowInterestRateHistory(
    params: GetBorrowInterestRateHistoryParams,
  ): Promise<BorrowInterestRateItem[]> {
    return this.client.get('/api/borrow-interest-rate/history', params);
  }

  async getEconomicCalendar(params?: GetEconomicCalendarParams): Promise<unknown> {
    return this.client.get('/api/calendar/economic-data', params);
  }

  async getArticleList(params?: GetArticleListParams): Promise<unknown> {
    return this.client.get('/api/article/list', params);
  }
}
