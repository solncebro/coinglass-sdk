# Changelog

## [1.1.0] - 2026-08-26

### Added

- Второй параметр конструктора `CoinGlass` и `CoinGlassClient` — `options: CoinGlassClientOptions` с полем `timeoutMilliseconds` для тайм-аута запроса
- `CoinGlass.getRateLimitState()` — состояние лимита запросов из заголовков ответа (`api-key-max-limit`, `api-key-use-limit`): сколько запросов разрешено, сколько уже потрачено и сколько осталось в текущую минуту

### Changed

- Зависимость `@solncebro/websocket-engine` расширена до диапазона `>=0.6.0 <1.0.0` (ранее `^0.2.0`)

## [1.0.3] - 2026-04-08

### Changed

- Переименование пакета с `@solncebro/coinglass` на `@solncebro/coinglass-sdk` для соответствия npm-конвенциям

## [1.0.2] - 2026-04-03

### Changed

- `ExchangePairItem` дополнен полями: `settlementCurrency`, `maxLeverage`, `fundingInterval`, `priceTickSize`, `onboardDate`

## [1.0.1] - 2026-04-03

### Fixed

- `CoinGlassError` теперь содержит поле `requestUrl` с полным URL запроса, вызвавшего ошибку

## [1.0.0] - 2026-03-21

### Added

- Первый публичный релиз SDK
- 149 REST эндпоинтов: Futures, Spots, Options, ETF, Indicators, OnChain, Hyperliquid, Other
- WebSocket-клиент: ликвидации и крупные фьючерсные сделки
- Автоматическая конвертация camelCase → snake_case для параметров и обратно для ответов
