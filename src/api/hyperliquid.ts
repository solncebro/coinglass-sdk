import { CoinGlassClient } from '../client';
import {
  HyperliquidWhalePositionItem,
  HyperliquidWhaleAlertItem,
  GetHyperliquidPositionParams,
  GetHyperliquidUserPositionParams,
  GetHyperliquidLongShortRatioHistoryParams,
} from '../types/hyperliquid';

export class HyperliquidApi {
  constructor(private readonly client: CoinGlassClient) {}

  async getWhalePosition(): Promise<HyperliquidWhalePositionItem[]> {
    return this.client.get('/api/hyperliquid/whale-position');
  }

  async getWhaleAlert(): Promise<HyperliquidWhaleAlertItem[]> {
    return this.client.get('/api/hyperliquid/whale-alert');
  }

  async getPosition(params: GetHyperliquidPositionParams): Promise<unknown> {
    return this.client.get('/api/hyperliquid/position', params);
  }

  async getUserPosition(params: GetHyperliquidUserPositionParams): Promise<unknown> {
    return this.client.get('/api/hyperliquid/user-position', params);
  }

  async getWalletPositionDistribution(): Promise<unknown> {
    return this.client.get('/api/hyperliquid/wallet/position-distribution');
  }

  async getWalletPnlDistribution(): Promise<unknown> {
    return this.client.get('/api/hyperliquid/wallet/pnl-distribution');
  }

  async getGlobalLongShortAccountRatioHistory(
    params: GetHyperliquidLongShortRatioHistoryParams,
  ): Promise<unknown> {
    return this.client.get('/api/hyperliquid/global-long-short-account-ratio/history', params);
  }
}
