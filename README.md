# @solncebro/coinglass

TypeScript SDK для CoinGlass API. Оборачивает ~120 REST эндпоинтов и 2 WebSocket-канала в типизированную библиотеку.

## Установка

```bash
yarn add @solncebro/coinglass
```

Или локально:

```bash
yarn add file:../coin-glass-parser
```

## Использование

### REST API

```ts
import { CoinGlass, IntervalEnum } from '@solncebro/coinglass';

const coinGlass = new CoinGlass('your-api-key');

// Open Interest
const ohlcItemList = await coinGlass.futures.getOpenInterestAggregatedHistory({
  symbol: 'BTC',
  interval: IntervalEnum.OneDay,
});

// Fear & Greed Index
const fearGreedData = await coinGlass.indicators.getFearGreedHistory();

// ETF Flows
const etfFlowItemList = await coinGlass.etf.getBitcoinFlowHistory();

// Hyperliquid Whale Positions
const whalePositionItemList = await coinGlass.hyperliquid.getWhalePosition();

// Coinbase Premium
const premiumItemList = await coinGlass.other.getCoinbasePremiumIndex({
  interval: IntervalEnum.OneDay,
});
```

### WebSocket

```ts
const logger = {
  debug: (msg: string) => console.log(msg),
  info: (msg: string) => console.log(msg),
  warn: (msg: string) => console.warn(msg),
  error: (msg: string) => console.error(msg),
  fatal: (msg: string) => console.error(msg),
};

const webSocket = coinGlass.createWebSocket(logger);

// Подписка на ликвидации
webSocket.subscribeLiquidationOrder((liquidationItemList) => {
  console.log(liquidationItemList);
});

// Подписка на крупные фьючерсные сделки
webSocket.subscribeFuturesTrade(
  { exchange: 'Binance', symbol: 'BTCUSDT', minimumVolumeUsd: 100000 },
  (tradeItemList) => {
    console.log(tradeItemList);
  },
);

// Закрытие соединения
webSocket.close();
```

## API-модули

| Модуль | Описание | Кол-во эндпоинтов |
|---|---|---|
| `futures` | Open Interest, Funding Rate, Liquidation, Long/Short, OrderBook, Taker, CVD, Net Position, Indicators | 65 |
| `spots` | Markets, OrderBook, Taker, CVD | 15 |
| `options` | Max Pain, Open Interest, Volume | 4 |
| `etf` | Bitcoin/Ethereum/Solana/Xrp ETF Flows | 13 |
| `indicators` | Fear&Greed, AHR999, Rainbow, NUPL, 30+ индексов | 32 |
| `onchain` | Exchange Balance, Whale Transfers, Token Unlocks | 8 |
| `hyperliquid` | Whale Positions, Alerts, Long/Short Ratio | 7 |
| `other` | Coinbase Premium, Bitfinex Margin, Borrow Rate, Calendar, News | 5 |

## Лицензия

MIT
