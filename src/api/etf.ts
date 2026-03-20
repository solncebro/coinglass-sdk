import { CoinGlassClient } from '../client';
import {
  GetEtfHistoryParams,
  EtfHistoryItem,
  EtfFlowHistoryItem,
  EthereumEtfFlowHistoryItem,
  GetEtfPriceHistoryParams,
  EtfPriceHistoryItem,
  GetEtfPremiumDiscountHistoryParams,
  EtfPremiumDiscountHistoryItem,
  GetEtfNetAssetsHistoryParams,
  EtfNetAssetsHistoryItem,
  EtfListItem,
  EthereumEtfListItem,
  GetEtfDetailParams,
} from '../types/etf';

export class EtfApi {
  constructor(private readonly client: CoinGlassClient) {}

  async getBitcoinHistory(params: GetEtfHistoryParams): Promise<EtfHistoryItem[]> {
    return this.client.get('/api/etf/bitcoin/history', params);
  }

  async getBitcoinFlowHistory(): Promise<EtfFlowHistoryItem[]> {
    return this.client.get('/api/etf/bitcoin/flow-history');
  }

  async getBitcoinDetail(params: GetEtfDetailParams): Promise<unknown> {
    return this.client.get('/api/etf/bitcoin/detail', params);
  }

  async getBitcoinPriceHistory(params: GetEtfPriceHistoryParams): Promise<EtfPriceHistoryItem[]> {
    return this.client.get('/api/etf/bitcoin/price/history', params);
  }

  async getBitcoinPremiumDiscountHistory(
    params?: GetEtfPremiumDiscountHistoryParams,
  ): Promise<EtfPremiumDiscountHistoryItem[]> {
    return this.client.get('/api/etf/bitcoin/premium-discount/history', params);
  }

  async getBitcoinNetAssetsHistory(
    params?: GetEtfNetAssetsHistoryParams,
  ): Promise<EtfNetAssetsHistoryItem[]> {
    return this.client.get('/api/etf/bitcoin/net-assets/history', params);
  }

  async getBitcoinList(): Promise<EtfListItem[]> {
    return this.client.get('/api/etf/bitcoin/list');
  }

  async getEthereumFlowHistory(): Promise<EthereumEtfFlowHistoryItem[]> {
    return this.client.get('/api/etf/ethereum/flow-history');
  }

  async getEthereumList(): Promise<EthereumEtfListItem[]> {
    return this.client.get('/api/etf/ethereum/list');
  }

  async getEthereumNetAssetsHistory(): Promise<EtfNetAssetsHistoryItem[]> {
    return this.client.get('/api/etf/ethereum/net-assets/history');
  }

  async getSolanaFlowHistory(): Promise<EthereumEtfFlowHistoryItem[]> {
    return this.client.get('/api/etf/solana/flow-history');
  }

  async getXrpFlowHistory(): Promise<EthereumEtfFlowHistoryItem[]> {
    return this.client.get('/api/etf/xrp/flow-history');
  }

  async getHongKongBitcoinFlowHistory(): Promise<EtfFlowHistoryItem[]> {
    return this.client.get('/api/hk-etf/bitcoin/flow-history');
  }
}
