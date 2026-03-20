export interface GetOptionMaxPainParams {
  symbol: string;
  exchange: string;
}

export interface OptionMaxPainItem {
  date: string;
  callOpenInterest: number;
  callOpenInterestMarketValue: number;
  callOpenInterestNotional: number;
  putOpenInterest: number;
  putOpenInterestMarketValue: number;
  putOpenInterestNotional: number;
  maxPainPrice: number;
}

export interface GetOptionInfoParams {
  symbol: string;
}

export interface OptionInfoItem {
  exchangeName: string;
  openInterest: number;
  oiMarketShare: number;
  openInterestChange24h: number;
  openInterestUsd: number;
  volumeUsd24h: number;
  volumeChangePercent24h: number;
}

export interface GetOptionExchangeVolumeHistoryParams {
  symbol: string;
  unit: string;
}

export interface GetOptionExchangeOpenInterestHistoryParams {
  symbol: string;
  unit: string;
  range: string;
}
