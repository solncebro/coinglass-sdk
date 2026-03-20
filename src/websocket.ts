import { ReliableWebSocket, WebSocketStatus } from '@solncebro/websocket-engine';
import {
  WebSocketSubscribeMessage,
  WebSocketDataMessage,
  WsLiquidationOrderItem,
  WsFuturesTradeItem,
  SubscribeFuturesTradeParams,
  WebSocketLogger,
  ParsedMessage,
} from './types/websocket';

const LIQUIDATION_CHANNEL = 'liquidationOrders';
const PING_PAYLOAD = 'ping' as unknown as Record<string, unknown>;

function buildFuturesTradeChannel(params: SubscribeFuturesTradeParams): string {
  return `futures_trades@${params.exchange}_${params.symbol}@${params.minimumVolumeUsd}`;
}

export class CoinGlassWebSocket {
  private readonly webSocket: ReliableWebSocket<ParsedMessage>;
  private readonly callbackByChannel = new Map<string, (data: unknown) => void>();
  private readonly subscribedChannelList: string[] = [];

  constructor(apiKey: string, logger: WebSocketLogger) {
    this.webSocket = new ReliableWebSocket<ParsedMessage>({
      label: 'CoinGlass',
      url: `wss://open-ws.coinglass.com/ws-api?cg-api-key=${apiKey}`,
      logger,
      heartbeat: {
        buildPayload: () => PING_PAYLOAD,
        isResponse: (message: ParsedMessage) => message.type === 'pong',
      },
      parseMessage: (rawData) => {
        const text = rawData.toString();

        if (text === 'pong') {
          return { type: 'pong', raw: null };
        }

        return { type: 'data', raw: JSON.parse(text) };
      },
      onOpen: async (context) => {
        if (this.subscribedChannelList.length > 0) {
          const message: WebSocketSubscribeMessage = {
            method: 'subscribe',
            channelList: [...this.subscribedChannelList],
          };

          context.send(JSON.stringify(message));
        }
      },
      onMessage: (message: ParsedMessage) => {
        if (message.type === 'pong') {
          return;
        }

        const dataMessage = message.raw as WebSocketDataMessage<unknown>;
        const callback = this.callbackByChannel.get(dataMessage.channel);

        if (callback) {
          callback(dataMessage.data);
        }
      },
    });
  }

  subscribeLiquidationOrder(callback: (liquidationItemList: WsLiquidationOrderItem[]) => void) {
    this.callbackByChannel.set(LIQUIDATION_CHANNEL, callback as (data: unknown) => void);
    this.addChannel(LIQUIDATION_CHANNEL);
  }

  subscribeFuturesTrade(
    params: SubscribeFuturesTradeParams,
    callback: (tradeItemList: WsFuturesTradeItem[]) => void,
  ) {
    const channel = buildFuturesTradeChannel(params);
    this.callbackByChannel.set(channel, callback as (data: unknown) => void);
    this.addChannel(channel);
  }

  unsubscribe(channel: string) {
    this.callbackByChannel.delete(channel);

    const index = this.subscribedChannelList.indexOf(channel);

    if (index !== -1) {
      this.subscribedChannelList.splice(index, 1);
    }

    if (this.webSocket.getStatus() === WebSocketStatus.CONNECTED) {
      const message: WebSocketSubscribeMessage = {
        method: 'unsubscribe',
        channelList: [channel],
      };

      this.webSocket.sendToConnectedSocket(JSON.stringify(message));
    }
  }

  close() {
    this.callbackByChannel.clear();
    this.subscribedChannelList.length = 0;
    this.webSocket.close();
  }

  private addChannel(channel: string) {
    if (!this.subscribedChannelList.includes(channel)) {
      this.subscribedChannelList.push(channel);
    }

    if (this.webSocket.getStatus() === WebSocketStatus.CONNECTED) {
      const message: WebSocketSubscribeMessage = {
        method: 'subscribe',
        channelList: [channel],
      };

      this.webSocket.sendToConnectedSocket(JSON.stringify(message));
    }
  }
}
