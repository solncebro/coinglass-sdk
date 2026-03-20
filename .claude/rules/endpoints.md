---
description: Complete catalog of CoinGlass API endpoints
globs: src/api/**/*.ts
---

# Каталог эндпоинтов CoinGlass API

## Futures (FuturesApi) — 64 эндпоинта

### Open Interest
- `getOpenInterestAggregatedHistory` → `/api/futures/open-interest/aggregated-history`
- `getOpenInterestExchangeHistoryChart` → `/api/futures/open-interest/exchange-history-chart`
- `getOpenInterestHistory` → `/api/futures/open-interest/history`
- `getOpenInterestExchangeList` → `/api/futures/open-interest/exchange-list`
- `getOpenInterestAggregatedCoinMarginHistory` → `/api/futures/open-interest/aggregated-coin-margin-history`
- `getOpenInterestAggregatedStablecoinHistory` → `/api/futures/open-interest/aggregated-stablecoin-history`

### Funding Rate
- `getFundingRateHistory` → `/api/futures/funding-rate/history`
- `getFundingRateOiWeightHistory` → `/api/futures/funding-rate/oi-weight-history`
- `getFundingRateVolWeightHistory` → `/api/futures/funding-rate/vol-weight-history`
- `getFundingRateExchangeList` → `/api/futures/funding-rate/exchange-list`
- `getFundingRateAccumulatedExchangeList` → `/api/futures/funding-rate/accumulated-exchange-list`
- `getFundingRateArbitrage` → `/api/futures/funding-rate/arbitrage`

### Liquidation
- `getLiquidationAggregatedHistory` → `/api/futures/liquidation/aggregated-history`
- `getLiquidationHistory` → `/api/futures/liquidation/history`
- `getLiquidationCoinList` → `/api/futures/liquidation/coin-list`
- `getLiquidationExchangeList` → `/api/futures/liquidation/exchange-list`
- `getLiquidationOrder` → `/api/futures/liquidation/order`
- `getLiquidationMap` → `/api/futures/liquidation/map`
- `getLiquidationAggregatedMap` → `/api/futures/liquidation/aggregated-map`
- `getLiquidationAggregatedHeatmapModel1` → `/api/futures/liquidation/aggregated-heatmap/model1`
- `getLiquidationAggregatedHeatmapModel2` → `/api/futures/liquidation/aggregated-heatmap/model2`
- `getLiquidationAggregatedHeatmapModel3` → `/api/futures/liquidation/aggregated-heatmap/model3`
- `getLiquidationHeatmapModel1` → `/api/futures/liquidation/heatmap/model1`
- `getLiquidationHeatmapModel2` → `/api/futures/liquidation/heatmap/model2`
- `getLiquidationHeatmapModel3` → `/api/futures/liquidation/heatmap/model3`
- `getLiquidationMaxPain` → `/api/futures/liquidation/max-pain`

### Long/Short Ratio
- `getGlobalLongShortAccountRatioHistory` → `/api/futures/global-long-short-account-ratio/history`
- `getTopLongShortAccountRatioHistory` → `/api/futures/top-long-short-account-ratio/history`
- `getTopLongShortPositionRatioHistory` → `/api/futures/top-long-short-position-ratio/history`

### Order Book
- `getOrderBookBidAskHistory` → `/api/futures/orderbook/ask-bids-history`
- `getAggregatedOrderBookBidAskHistory` → `/api/futures/orderbook/aggregated-ask-bids-history`
- `getOrderBookHistory` → `/api/futures/orderbook/history`
- `getLargeLimitOrder` → `/api/futures/orderbook/large-limit-order`
- `getLargeLimitOrderHistory` → `/api/futures/orderbook/large-limit-order-history`

### Taker Buy/Sell
- `getTakerBuySellExchangeList` → `/api/futures/taker-buy-sell-volume/exchange-list`
- `getTakerBuySellRatioHistory` → `/api/futures/aggregatedTakerBuySellVolumeRatio/history`
- `getAggregatedTakerBuySellVolumeHistory` → `/api/futures/aggregated-taker-buy-sell-volume/history`
- `getTakerBuySellVolumeHistory` → `/api/futures/v2/taker-buy-sell-volume/history`

### Price & Basis
- `getPriceHistory` → `/api/futures/price/history`
- `getBasisHistory` → `/api/futures/basis/history`

### Markets
- `getCoinsMarkets` → `/api/futures/coins-markets`
- `getPairsMarkets` → `/api/futures/pairs-markets`
- `getCoinsPriceChange` → `/api/futures/coins-price-change`
- `getRsiList` → `/api/futures/rsi/list`

### Reference
- `getSupportedCoins` → `/api/futures/supported-coins`
- `getSupportedExchangePairs` → `/api/futures/supported-exchange-pairs`
- `getSupportedExchanges` → `/api/futures/supported-exchanges`
- `getDelistedExchangePairs` → `/api/futures/delisted-exchange-pairs`

### CVD
- `getCvdHistory` → `/api/futures/cvd/history`
- `getAggregatedCvdHistory` → `/api/futures/aggregated-cvd/history`

### Net Position
- `getNetPositionHistory` → `/api/futures/net-position/history`
- `getNetPositionHistoryV2` → `/api/futures/v2/net-position/history`

### Volume
- `getFootprintHistory` → `/api/futures/volume/footprint-history`
- `getFuturesSpotVolumeRatio` → `/api/futures_spot_volume_ratio`

### Other Futures
- `getWhaleIndexHistory` → `/api/futures/whale-index/history`
- `getNetflowList` → `/api/futures/netflow-list`
- `getMacdList` → `/api/futures/macd/list`
- `getExchangeRank` → `/api/futures/exchange-rank`

### Technical Indicators
- `getMovingAverage` → `/api/futures/indicators/ma`
- `getExponentialMovingAverage` → `/api/futures/indicators/ema`
- `getMacd` → `/api/futures/indicators/macd`
- `getBollingerBands` → `/api/futures/indicators/boll`
- `getRsi` → `/api/futures/indicators/rsi`
- `getAverageTrueRange` → `/api/futures/indicators/avg-true-range`

## Spots (SpotsApi) — 15 эндпоинтов

- `getSupportedCoins` → `/api/spot/supported-coins`
- `getSupportedExchangePairs` → `/api/spot/supported-exchange-pairs`
- `getCoinsMarkets` → `/api/spot/coins-markets`
- `getPairsMarkets` → `/api/spot/pairs-markets`
- `getPriceHistory` → `/api/spot/price/history`
- `getOrderBookBidAskHistory` → `/api/spot/orderbook/ask-bids-history`
- `getAggregatedOrderBookBidAskHistory` → `/api/spot/orderbook/aggregated-ask-bids-history`
- `getOrderBookHistory` → `/api/spot/orderbook/history`
- `getLargeLimitOrder` → `/api/spot/orderbook/large-limit-order`
- `getLargeLimitOrderHistory` → `/api/spot/orderbook/large-limit-order-history`
- `getTakerBuySellVolumeHistory` → `/api/spot/taker-buy-sell-volume/history`
- `getAggregatedTakerBuySellVolumeHistory` → `/api/spot/aggregated-taker-buy-sell-volume/history`
- `getCvdHistory` → `/api/spot/cvd/history`
- `getAggregatedCvdHistory` → `/api/spot/aggregated-cvd/history`
- `getNetflowList` → `/api/spot/netflow-list`

## Options (OptionsApi) — 4 эндпоинта

- `getMaxPain` → `/api/option/max-pain`
- `getInfo` → `/api/option/info`
- `getExchangeVolumeHistory` → `/api/option/exchange-vol-history`
- `getExchangeOpenInterestHistory` → `/api/option/exchange-oi-history`

## ETF (EtfApi) — 13 эндпоинтов

- `getBitcoinHistory` → `/api/etf/bitcoin/history`
- `getBitcoinFlowHistory` → `/api/etf/bitcoin/flow-history`
- `getBitcoinDetail` → `/api/etf/bitcoin/detail`
- `getBitcoinPriceHistory` → `/api/etf/bitcoin/price/history`
- `getBitcoinPremiumDiscountHistory` → `/api/etf/bitcoin/premium-discount/history`
- `getBitcoinNetAssetsHistory` → `/api/etf/bitcoin/net-assets/history`
- `getBitcoinList` → `/api/etf/bitcoin/list`
- `getEthereumFlowHistory` → `/api/etf/ethereum/flow-history`
- `getEthereumList` → `/api/etf/ethereum/list`
- `getEthereumNetAssetsHistory` → `/api/etf/ethereum/net-assets/history`
- `getSolanaFlowHistory` → `/api/etf/solana/flow-history`
- `getXrpFlowHistory` → `/api/etf/xrp/flow-history`
- `getHongKongBitcoinFlowHistory` → `/api/hk-etf/bitcoin/flow-history`

## Indicators (IndicatorsApi) — 33 эндпоинта

- `getFearGreedHistory` → `/api/index/fear-greed-history`
- `getAhr999` → `/api/index/ahr999`
- `getPuellMultiple` → `/api/index/puell-multiple`
- `getStockFlow` → `/api/index/stock-flow`
- `getGoldenRatioMultiplier` → `/api/index/golden-ratio-multiplier`
- `getStablecoinMarketCapHistory` → `/api/index/stableCoin-marketCap-history`
- `getBitcoinRainbowChart` → `/api/index/bitcoin/rainbow-chart`
- `getPiCycleIndicator` → `/api/index/pi-cycle-indicator`
- `getTwoYearMaMultiplier` → `/api/index/2-year-ma-multiplier`
- `get200WeekMovingAverageHeatmap` → `/api/index/200-week-moving-average-heatmap`
- `getBitcoinProfitableDays` → `/api/index/bitcoin/profitable-days`
- `getBitcoinBubbleIndex` → `/api/index/bitcoin/bubble-index`
- `getBitcoinSthSopr` → `/api/index/bitcoin-sth-sopr`
- `getBitcoinLthSopr` → `/api/index/bitcoin-lth-sopr`
- `getBitcoinSthRealizedPrice` → `/api/index/bitcoin-sth-realized-price`
- `getBitcoinLthRealizedPrice` → `/api/index/bitcoin-lth-realized-price`
- `getBitcoinRhodlRatio` → `/api/index/bitcoin-rhodl-ratio`
- `getBitcoinShortTermHolderSupply` → `/api/index/bitcoin-short-term-holder-supply`
- `getBitcoinLongTermHolderSupply` → `/api/index/bitcoin-long-term-holder-supply`
- `getBitcoinNewAddresses` → `/api/index/bitcoin-new-addresses`
- `getBitcoinActiveAddresses` → `/api/index/bitcoin-active-addresses`
- `getBitcoinReserveRisk` → `/api/index/bitcoin-reserve-risk`
- `getBitcoinNetUnrealizedProfitLoss` → `/api/index/bitcoin-net-unrealized-profit-loss`
- `getBitcoinCorrelation` → `/api/index/bitcoin-correlation`
- `getBitcoinMacroOscillator` → `/api/index/bitcoin-macro-oscillator`
- `getOptionVsFuturesOiRatio` → `/api/index/option-vs-futures-oi-ratio`
- `getAltcoinSeason` → `/api/index/altcoin-season`
- `getBitcoinVsGlobalM2Growth` → `/api/index/bitcoin-vs-global-m2-growth`
- `getBitcoinVsUsM2Growth` → `/api/index/bitcoin-vs-us-m2-growth`
- `getBitcoinDominance` → `/api/index/bitcoin-dominance`
- `getBullMarketPeakIndicator` → `/api/bull-market-peak-indicator`
- `getGrayscaleHoldingsList` → `/api/grayscale/holdings-list`
- `getGrayscalePremiumHistory` → `/api/grayscale/premium-history`

## OnChain (OnChainApi) — 8 эндпоинтов

- `getExchangeBalanceChart` → `/api/exchange/balance/chart`
- `getExchangeBalanceList` → `/api/exchange/balance/list`
- `getExchangeAssets` → `/api/exchange/assets`
- `getExchangeOnChainTransferList` → `/api/exchange/chain/tx/list`
- `getExchangeAssetsTransparencyList` → `/api/exchange_assets_transparency/list`
- `getWhaleTransfer` → `/api/chain/v2/whale-transfer`
- `getTokenUnlockList` → `/api/coin/unlock-list`
- `getTokenVesting` → `/api/coin/vesting`

## Hyperliquid (HyperliquidApi) — 7 эндпоинтов

- `getWhalePosition` → `/api/hyperliquid/whale-position`
- `getWhaleAlert` → `/api/hyperliquid/whale-alert`
- `getPosition` → `/api/hyperliquid/position`
- `getUserPosition` → `/api/hyperliquid/user-position`
- `getWalletPositionDistribution` → `/api/hyperliquid/wallet/position-distribution`
- `getWalletPnlDistribution` → `/api/hyperliquid/wallet/pnl-distribution`
- `getGlobalLongShortAccountRatioHistory` → `/api/hyperliquid/global-long-short-account-ratio/history`

## Other (OtherApi) — 5 эндпоинтов

- `getCoinbasePremiumIndex` → `/api/coinbase-premium-index`
- `getBitfinexMarginLongShort` → `/api/bitfinex-margin-long-short`
- `getBorrowInterestRateHistory` → `/api/borrow-interest-rate/history`
- `getEconomicCalendar` → `/api/calendar/economic-data`
- `getArticleList` → `/api/article/list`

## WebSocket — 2 канала

- `subscribeLiquidationOrder` → канал `liquidationOrders`
- `subscribeFuturesTrade` → канал `futures_trades@{exchange}_{symbol}@{minVol}`
