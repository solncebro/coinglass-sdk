---
description: Architecture of CoinGlass TypeScript SDK
globs: src/**/*.ts
---

# Архитектура

## Слои

1. **client** (`src/client.ts`) — Axios HTTP-клиент
   - BaseURL: `https://open-api-v4.coinglass.com`
   - Заголовок `CG-API-KEY`
   - Response interceptor: проверяет `code !== "0"` и бросает `CoinGlassError`
   - Метод `get<T>(path, params?)` конвертирует camelCase→snake_case для параметров и snake_case→camelCase для ответа

2. **types** (`src/types/*.ts`) — все интерфейсы и enum'ы
   - `common.ts` — базовые типы (IntervalEnum, TimeRangeParams, OhlcItem)
   - Остальные файлы по категориям API

3. **api** (`src/api/*.ts`) — классы API-модулей
   - Каждый класс принимает `CoinGlassClient` в конструкторе
   - Каждый метод вызывает `client.get()` с путём и параметрами

4. **index** (`src/index.ts`) — класс `CoinGlass`
   - Создаёт `CoinGlassClient` и все API-модули
   - Метод `createWebSocket()` для WebSocket-подключения

## Паттерны параметров

| Паттерн | Параметры |
|---|---|
| OHLC + symbol | symbol, interval + TimeRangeParams |
| OHLC + exchange + pair | exchange, symbol, interval + TimeRangeParams |
| Aggregated + exchangeList | exchangeList, symbol, interval + TimeRangeParams |
| Без параметров | — |
| Только symbol | symbol |
| Пагинация | PaginationParams |

## WebSocket

- URL: `wss://open-ws.coinglass.com/ws-api?cg-api-key={apiKey}`
- Библиотека: `@solncebro/websocket-engine` (ReliableWebSocket)
- 2 канала: `liquidationOrders`, `futures_trades@{exchange}_{symbol}@{minVol}`
