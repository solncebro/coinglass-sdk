import { CoinGlassClient } from '../client';
import { TimeSeriesChartData } from '../types/common';
import {
  GetExchangeBalanceChartParams,
  GetExchangeBalanceListParams,
  GetExchangeAssetsParams,
  ExchangeAssetItem,
  GetExchangeOnChainTransferListParams,
  ExchangeOnChainTransferItem,
  GetWhaleTransferParams,
  GetTokenUnlockListParams,
  GetTokenVestingParams,
} from '../types/onchain';

export class OnChainApi {
  constructor(private readonly client: CoinGlassClient) {}

  async getExchangeBalanceChart(
    params: GetExchangeBalanceChartParams,
  ): Promise<TimeSeriesChartData> {
    return this.client.get('/api/exchange/balance/chart', params);
  }

  async getExchangeBalanceList(params: GetExchangeBalanceListParams): Promise<unknown> {
    return this.client.get('/api/exchange/balance/list', params);
  }

  async getExchangeAssets(params: GetExchangeAssetsParams): Promise<ExchangeAssetItem[]> {
    return this.client.get('/api/exchange/assets', params);
  }

  async getExchangeOnChainTransferList(
    params?: GetExchangeOnChainTransferListParams,
  ): Promise<ExchangeOnChainTransferItem[]> {
    return this.client.get('/api/exchange/chain/tx/list', params);
  }

  async getExchangeAssetsTransparencyList(): Promise<unknown> {
    return this.client.get('/api/exchange_assets_transparency/list');
  }

  async getWhaleTransfer(params?: GetWhaleTransferParams): Promise<unknown> {
    return this.client.get('/api/chain/v2/whale-transfer', params);
  }

  async getTokenUnlockList(params?: GetTokenUnlockListParams): Promise<unknown> {
    return this.client.get('/api/coin/unlock-list', params);
  }

  async getTokenVesting(params: GetTokenVestingParams): Promise<unknown> {
    return this.client.get('/api/coin/vesting', params);
  }
}
