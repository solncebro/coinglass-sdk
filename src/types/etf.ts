export interface GetEtfHistoryParams {
  ticker: string;
}

export interface EtfHistoryItem {
  assetsDate: number;
  btcHoldings: number;
  marketDate: number;
  marketPrice: number;
  name: string;
  nav: number;
  netAssets: number;
  premiumDiscount: number;
  sharesOutstanding: number;
  ticker: string;
}

export interface EtfFlowHistoryItem {
  timestamp: number;
  flowUsd: number;
  priceUsd: number;
  etfFlowList: EtfFlowItem[];
}

export interface EtfFlowItem {
  etfTicker: string;
  flowUsd: number;
}

export interface EthereumEtfFlowHistoryItem {
  timestamp: number;
  changeUsd: number;
  price: number;
  closePrice: number;
  etfFlowList: EthereumEtfFlowItem[];
}

export interface EthereumEtfFlowItem {
  ticker: string;
  changeUsd: number;
}

export interface GetEtfPriceHistoryParams {
  ticker: string;
  range: string;
}

export interface EtfPriceHistoryItem {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface GetEtfPremiumDiscountHistoryParams {
  ticker?: string;
}

export interface EtfPremiumDiscountHistoryItem {
  timestamp: number;
  premiumDiscountItemList: EtfPremiumDiscountItem[];
}

export interface EtfPremiumDiscountItem {
  ticker: string;
  navUsd: number;
  marketPriceUsd: number;
  premiumDiscountDetails: number;
}

export interface GetEtfNetAssetsHistoryParams {
  ticker?: string;
}

export interface EtfNetAssetsHistoryItem {
  netAssetsUsd: number;
  changeUsd: number;
  timestamp: number;
  priceUsd: number;
}

export interface EtfListItem {
  ticker: string;
  fundName: string;
  region: string;
  marketStatus: string;
  primaryExchange: string;
  cikCode: string;
  fundType: string;
  listDate: number;
  sharesOutstanding: number;
  aumUsd: number;
  managementFeePercent: number;
  volumeQuantity: number;
  volumeUsd: number;
  priceChangeUsd: number;
  priceChangePercent: number;
}

export interface EthereumEtfListItem {
  ticker: string;
  name: string;
  region: string;
  marketStatus: string;
  primaryExchange: string;
  cikCode: string;
  type: string;
  marketCap: number;
  listDate: number;
  sharesOutstanding: number;
  aum: number;
  managementFeePercent: number;
  volumeQuantity: number;
  volumeUsd: number;
  price: number;
  priceChange: number;
  priceChangePercent: number;
}

export interface GetEtfDetailParams {
  ticker: string;
}
