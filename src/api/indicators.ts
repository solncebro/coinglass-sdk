import { CoinGlassClient } from '../client';
import {
  FearGreedHistoryData,
  Ahr999Item,
  PuellMultipleItem,
  StockFlowItem,
  GoldenRatioMultiplierItem,
  StablecoinMarketCapHistoryData,
  PiCycleIndicatorItem,
  TwoYearMaMultiplierItem,
  WeekMovingAverageHeatmapItem,
  BitcoinProfitableDaysItem,
  BitcoinBubbleIndexItem,
  BitcoinSthSoprItem,
  BullMarketPeakIndicatorItem,
  GrayscaleHoldingsItem,
  GetGrayscalePremiumHistoryParams,
  GrayscalePremiumHistoryData,
} from '../types/indicators';

export class IndicatorsApi {
  constructor(private readonly client: CoinGlassClient) {}

  async getFearGreedHistory(): Promise<FearGreedHistoryData> {
    return this.client.get('/api/index/fear-greed-history');
  }

  async getAhr999(): Promise<Ahr999Item[]> {
    return this.client.get('/api/index/ahr999');
  }

  async getPuellMultiple(): Promise<PuellMultipleItem[]> {
    return this.client.get('/api/index/puell-multiple');
  }

  async getStockFlow(): Promise<StockFlowItem[]> {
    return this.client.get('/api/index/stock-flow');
  }

  async getGoldenRatioMultiplier(): Promise<GoldenRatioMultiplierItem[]> {
    return this.client.get('/api/index/golden-ratio-multiplier');
  }

  async getStablecoinMarketCapHistory(): Promise<StablecoinMarketCapHistoryData> {
    return this.client.get('/api/index/stableCoin-marketCap-history');
  }

  async getBitcoinRainbowChart(): Promise<number[][]> {
    return this.client.get('/api/index/bitcoin/rainbow-chart');
  }

  async getPiCycleIndicator(): Promise<PiCycleIndicatorItem[]> {
    return this.client.get('/api/index/pi-cycle-indicator');
  }

  async getTwoYearMaMultiplier(): Promise<TwoYearMaMultiplierItem[]> {
    return this.client.get('/api/index/2-year-ma-multiplier');
  }

  async get200WeekMovingAverageHeatmap(): Promise<WeekMovingAverageHeatmapItem[]> {
    return this.client.get('/api/index/200-week-moving-average-heatmap');
  }

  async getBitcoinProfitableDays(): Promise<BitcoinProfitableDaysItem[]> {
    return this.client.get('/api/index/bitcoin/profitable-days');
  }

  async getBitcoinBubbleIndex(): Promise<BitcoinBubbleIndexItem[]> {
    return this.client.get('/api/index/bitcoin/bubble-index');
  }

  async getBitcoinSthSopr(): Promise<BitcoinSthSoprItem[]> {
    return this.client.get('/api/index/bitcoin-sth-sopr');
  }

  async getBitcoinLthSopr(): Promise<unknown> {
    return this.client.get('/api/index/bitcoin-lth-sopr');
  }

  async getBitcoinSthRealizedPrice(): Promise<unknown> {
    return this.client.get('/api/index/bitcoin-sth-realized-price');
  }

  async getBitcoinLthRealizedPrice(): Promise<unknown> {
    return this.client.get('/api/index/bitcoin-lth-realized-price');
  }

  async getBitcoinRhodlRatio(): Promise<unknown> {
    return this.client.get('/api/index/bitcoin-rhodl-ratio');
  }

  async getBitcoinShortTermHolderSupply(): Promise<unknown> {
    return this.client.get('/api/index/bitcoin-short-term-holder-supply');
  }

  async getBitcoinLongTermHolderSupply(): Promise<unknown> {
    return this.client.get('/api/index/bitcoin-long-term-holder-supply');
  }

  async getBitcoinNewAddresses(): Promise<unknown> {
    return this.client.get('/api/index/bitcoin-new-addresses');
  }

  async getBitcoinActiveAddresses(): Promise<unknown> {
    return this.client.get('/api/index/bitcoin-active-addresses');
  }

  async getBitcoinReserveRisk(): Promise<unknown> {
    return this.client.get('/api/index/bitcoin-reserve-risk');
  }

  async getBitcoinNetUnrealizedProfitLoss(): Promise<unknown> {
    return this.client.get('/api/index/bitcoin-net-unrealized-profit-loss');
  }

  async getBitcoinCorrelation(): Promise<unknown> {
    return this.client.get('/api/index/bitcoin-correlation');
  }

  async getBitcoinMacroOscillator(): Promise<unknown> {
    return this.client.get('/api/index/bitcoin-macro-oscillator');
  }

  async getOptionVsFuturesOiRatio(): Promise<unknown> {
    return this.client.get('/api/index/option-vs-futures-oi-ratio');
  }

  async getAltcoinSeason(): Promise<unknown> {
    return this.client.get('/api/index/altcoin-season');
  }

  async getBitcoinVsGlobalM2Growth(): Promise<unknown> {
    return this.client.get('/api/index/bitcoin-vs-global-m2-growth');
  }

  async getBitcoinVsUsM2Growth(): Promise<unknown> {
    return this.client.get('/api/index/bitcoin-vs-us-m2-growth');
  }

  async getBitcoinDominance(): Promise<unknown> {
    return this.client.get('/api/index/bitcoin-dominance');
  }

  async getBullMarketPeakIndicator(): Promise<BullMarketPeakIndicatorItem[]> {
    return this.client.get('/api/bull-market-peak-indicator');
  }

  async getGrayscaleHoldingsList(): Promise<GrayscaleHoldingsItem[]> {
    return this.client.get('/api/grayscale/holdings-list');
  }

  async getGrayscalePremiumHistory(
    params: GetGrayscalePremiumHistoryParams,
  ): Promise<GrayscalePremiumHistoryData> {
    return this.client.get('/api/grayscale/premium-history', params);
  }
}
