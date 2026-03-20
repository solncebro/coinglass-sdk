import { PaginationParams } from './common';

export interface GetExchangeBalanceChartParams {
  symbol: string;
}

export interface GetExchangeBalanceListParams {
  symbol: string;
}

export interface GetExchangeAssetsParams extends PaginationParams {
  exchange: string;
}

export interface ExchangeAssetItem {
  walletAddress: string;
  balance: number;
  balanceUsd: number;
  symbol: string;
  assetsName: string;
  price: number;
}

export interface GetExchangeOnChainTransferListParams extends PaginationParams {
  symbol?: string;
  startTime?: number;
  minUsd?: number;
}

export interface ExchangeOnChainTransferItem {
  transactionHash: string;
  assetSymbol: string;
  amountUsd: number;
  assetQuantity: number;
  exchangeName: string;
  transferType: number;
  fromAddress: string;
  toAddress: string;
  transactionTime: number;
}

export interface GetWhaleTransferParams {
  symbol?: string;
  startTime?: number;
  endTime?: number;
}

export type GetTokenUnlockListParams = PaginationParams;

export interface GetTokenVestingParams {
  symbol: string;
}
