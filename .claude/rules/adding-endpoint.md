---
description: How to add a new CoinGlass API endpoint
globs: src/**/*.ts
---

# Добавление нового эндпоинта

## Шаги

### 1. Определить типы параметров

В `src/types/<category>.ts` создать интерфейс параметров:

```ts
interface GetNewEndpointParams extends TimeRangeParams {
  symbol: string;
  interval: IntervalEnum;
}
```

### 2. Определить тип ответа

В том же файле типов создать интерфейс ответа:

```ts
interface NewEndpointItem {
  time: number;
  value: number;
}
```

### 3. Добавить метод в API-класс

В `src/api/<category>.ts` добавить метод:

```ts
async getNewEndpoint(params: GetNewEndpointParams): Promise<NewEndpointItem[]> {
  return this.client.get('/api/path/to/endpoint', params);
}
```

### 4. Реэкспортировать типы

Если типы нужны внешним потребителям, убедиться что `src/types/index.ts` экспортирует соответствующий файл.

### 5. Проверить

```bash
yarn build && yarn lint && yarn format:check
```

## Правила

- Параметры в camelCase (клиент автоматически конвертирует в snake_case)
- Тип возврата — `Promise<T>` где T — конкретный тип или `unknown` для недокументированных ответов
- Если эндпоинт возвращает OHLC данные, использовать `OhlcItem` или `OhlcVolumeItem`
- Если эндпоинт возвращает chart data с timeList/priceList/dataMap, использовать `TimeSeriesChartData`
