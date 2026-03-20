import { CoinGlassClient } from '../client';
import { TimeSeriesChartData } from '../types/common';
import {
  GetOptionMaxPainParams,
  OptionMaxPainItem,
  GetOptionInfoParams,
  OptionInfoItem,
  GetOptionExchangeVolumeHistoryParams,
  GetOptionExchangeOpenInterestHistoryParams,
} from '../types/options';

export class OptionsApi {
  constructor(private readonly client: CoinGlassClient) {}

  async getMaxPain(params: GetOptionMaxPainParams): Promise<OptionMaxPainItem[]> {
    return this.client.get('/api/option/max-pain', params);
  }

  async getInfo(params: GetOptionInfoParams): Promise<OptionInfoItem[]> {
    return this.client.get('/api/option/info', params);
  }

  async getExchangeVolumeHistory(
    params: GetOptionExchangeVolumeHistoryParams,
  ): Promise<TimeSeriesChartData> {
    return this.client.get('/api/option/exchange-vol-history', params);
  }

  async getExchangeOpenInterestHistory(
    params: GetOptionExchangeOpenInterestHistoryParams,
  ): Promise<TimeSeriesChartData> {
    return this.client.get('/api/option/exchange-oi-history', params);
  }
}
