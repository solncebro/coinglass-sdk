# CoinGlass TypeScript SDK

TypeScript-библиотека для CoinGlass REST API и WebSocket. Оборачивает 149 эндпоинтов и 2 WebSocket-канала в типизированный SDK.

- **npm-пакет**: `@solncebro/coinglass`
- **Лицензия**: MIT
- **Репозиторий**: https://github.com/solncebro/coinglass-sdk

## Структура проекта

```
src/
├── client.ts          # Axios HTTP-клиент с CG-API-KEY и camelCase→snake_case конвертацией
├── websocket.ts       # WebSocket-клиент на @solncebro/websocket-engine
├── types/             # Все интерфейсы и enum'ы
│   ├── common.ts      # IntervalEnum, TimeRangeParams, PaginationParams, OhlcItem, ApiResponse
│   ├── futures.ts     # Типы для фьючерсных эндпоинтов (64 эндпоинта)
│   ├── spots.ts       # Типы для спотовых эндпоинтов
│   ├── options.ts     # Типы для опционных эндпоинтов
│   ├── etf.ts         # Типы для ETF эндпоинтов
│   ├── indicators.ts  # Типы для индикаторов и макро-метрик
│   ├── onchain.ts     # Типы для ончейн-эндпоинтов
│   ├── hyperliquid.ts # Типы для Hyperliquid
│   ├── websocket.ts   # Типы для WebSocket-сообщений
│   └── index.ts       # Реэкспорт всех типов
├── api/               # API-модули (классы с методами для каждого эндпоинта)
│   ├── futures.ts     # FuturesApi
│   ├── spots.ts       # SpotsApi
│   ├── options.ts     # OptionsApi
│   ├── etf.ts         # EtfApi
│   ├── indicators.ts  # IndicatorsApi
│   ├── onchain.ts     # OnChainApi
│   ├── hyperliquid.ts # HyperliquidApi
│   └── other.ts       # OtherApi (Coinbase Premium, Bitfinex Margin, Borrow Rate, Calendar, News)
└── index.ts           # Класс CoinGlass — главный экспорт
```

## Ключевые команды

- `yarn build` — компиляция TypeScript в dist/
- `yarn lint` — проверка ESLint
- `yarn format` — форматирование Prettier
- `yarn format:check` — проверка форматирования
- `yarn test` — запуск test.ts (нужен CG_API_KEY)

## Правила именования

- Массивы: singular + `List` (ohlcItemList, etfFlowList)
- Maps: ключ через `By` (exchangeByName)
- Типы: суффикс `Params` (запросы), `Args` (функции), `Enum` (перечисления)
- Аббревиатуры как слова: `OhlcItem`, `EtfApi`, `CvdHistory`
- Слова не сокращать
- Без комментариев в коде
- Без `any`, inline-типов
- `??` вместо `||`
- Пустая строка перед управляющими конструкциями

## Как добавить новый эндпоинт

1. Определить типы параметров и ответа в `src/types/<category>.ts`
2. Добавить метод в `src/api/<category>.ts`
3. Реэкспортировать типы через `src/types/index.ts` если нужно
4. `yarn build && yarn lint && yarn format:check`
