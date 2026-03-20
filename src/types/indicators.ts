import { IndexChartData } from './common';

export type FearGreedHistoryData = IndexChartData;

export interface Ahr999Item {
  dateString: string;
  averagePrice: number;
  ahr999Value: number;
  currentValue: number;
}

export interface PuellMultipleItem {
  timestamp: number;
  price: number;
  puellMultiple: number;
}

export interface StockFlowItem {
  timestamp: number;
  price: number;
  nextHalving: number;
}

export interface GoldenRatioMultiplierItem {
  timestamp: number;
  price: number;
  ma350: number;
  lowBullHigh2: number;
  accumulationHigh16: number;
  x3: number;
  x5: number;
  x8: number;
  x13: number;
  x21: number;
}

export type StablecoinMarketCapHistoryData = IndexChartData;

export interface PiCycleIndicatorItem {
  timestamp: number;
  price: number;
  ma110: number;
  ma350Mu2: number;
}

export interface TwoYearMaMultiplierItem {
  timestamp: number;
  price: number;
  movingAverage730: number;
  movingAverage730Multiplier5: number;
}

export interface WeekMovingAverageHeatmapItem {
  timestamp: number;
  price: number;
  movingAverage1440: number;
  movingAverage1440Ip: number;
}

export interface BitcoinProfitableDaysItem {
  timestamp: number;
  price: number;
  side: number;
}

export interface BitcoinBubbleIndexItem {
  dateString: string;
  price: number;
  bubbleIndex: number;
  googleTrendPercent: number;
  miningDifficulty: number;
  transactionCount: number;
  addressSendCount: number;
  tweetCount: number;
}

export interface BitcoinSthSoprItem {
  timestamp: number;
  price: number;
  sthSopr: number;
}

export interface BullMarketPeakIndicatorItem {
  indicatorName: string;
  currentValue: number;
  targetValue: number;
  previousValue: number;
  changeValue: number;
  comparisonType: string;
  hitStatus: boolean;
}

export interface GrayscaleHoldingsItem {
  symbol: string;
  primaryMarketPrice: number;
  secondaryMarketPrice: number;
  premiumRate: number;
  holdingsAmount: number;
  holdingsUsd: number;
  holdingsAmountChange30d: number;
  holdingsAmountChange7d: number;
  holdingsAmountChange1d: number;
  closeTime: number;
  updateTime: number;
}

export interface GetGrayscalePremiumHistoryParams {
  symbol: string;
}

export interface GrayscalePremiumHistoryData {
  primaryMarketPriceList: number[];
  dateList: number[];
  secondaryMarketPriceList: number[];
  premiumRateList: number[];
}
