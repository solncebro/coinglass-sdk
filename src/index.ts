import { CoinGlassClient } from './client';
import { CoinGlassWebSocket } from './websocket';
import { WebSocketLogger } from './types/websocket';
import { FuturesApi } from './api/futures';
import { SpotsApi } from './api/spots';
import { OptionsApi } from './api/options';
import { EtfApi } from './api/etf';
import { IndicatorsApi } from './api/indicators';
import { OnChainApi } from './api/onchain';
import { HyperliquidApi } from './api/hyperliquid';
import { OtherApi } from './api/other';

export class CoinGlass {
  readonly futures: FuturesApi;
  readonly spots: SpotsApi;
  readonly options: OptionsApi;
  readonly etf: EtfApi;
  readonly indicators: IndicatorsApi;
  readonly onchain: OnChainApi;
  readonly hyperliquid: HyperliquidApi;
  readonly other: OtherApi;

  private readonly apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;

    const client = new CoinGlassClient(apiKey);

    this.futures = new FuturesApi(client);
    this.spots = new SpotsApi(client);
    this.options = new OptionsApi(client);
    this.etf = new EtfApi(client);
    this.indicators = new IndicatorsApi(client);
    this.onchain = new OnChainApi(client);
    this.hyperliquid = new HyperliquidApi(client);
    this.other = new OtherApi(client);
  }

  createWebSocket(logger: WebSocketLogger): CoinGlassWebSocket {
    return new CoinGlassWebSocket(this.apiKey, logger);
  }
}

export { CoinGlassWebSocket } from './websocket';
export { CoinGlassClient } from './client';
export * from './types';
export { FuturesApi } from './api/futures';
export { SpotsApi } from './api/spots';
export { OptionsApi } from './api/options';
export { EtfApi } from './api/etf';
export { IndicatorsApi } from './api/indicators';
export { OnChainApi } from './api/onchain';
export { HyperliquidApi } from './api/hyperliquid';
export { OtherApi } from './api/other';
