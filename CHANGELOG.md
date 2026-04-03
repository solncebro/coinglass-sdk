# Changelog

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
