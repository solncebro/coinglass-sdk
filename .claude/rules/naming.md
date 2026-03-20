---
description: Naming conventions for CoinGlass SDK
globs: src/**/*.ts
---

# Правила именования

## Переменные и поля

- Массивы: singular + `List` → `ohlcItemList`, `etfFlowList`, `whalePositionItemList`
- Maps: ключ через `By` → `exchangeByName`, `callbackByChannel`
- Булевы значения: без `is`/`has` префикса если контекст очевиден

## Типы

- Параметры запросов: `Get` + описание + `Params` → `GetOpenInterestAggregatedHistoryParams`
- Аргументы функций: суффикс `Args` → `SubscribeFuturesTradeParams` (исключение: WebSocket params)
- Перечисления: суффикс `Enum` → `IntervalEnum`, `LiquidationSideEnum`
- Элементы списков: суффикс `Item` → `OhlcItem`, `LiquidationOrderItem`
- Данные графиков: суффикс `Data` → `FearGreedHistoryData`, `TimeSeriesChartData`

## Аббревиатуры

Аббревиатуры записываются как слова (PascalCase):
- `OhlcItem` (не `OHLCItem`)
- `EtfApi` (не `ETFApi`)
- `CvdHistory` (не `CVDHistory`)
- `RsiItem` (не `RSIItem`)

## Запреты

- Не сокращать слова: `exchange` (не `ex`), `symbol` (не `sym`)
- Без `any`, inline-типов, type alias для простых объектов
- Без комментариев в коде
