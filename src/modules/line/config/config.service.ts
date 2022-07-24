import {Injectable,Logger,OnApplicationBootstrap} from '@nestjs/common';
import { ClientConfig, Client, middleware, MiddlewareConfig, WebhookEvent, TextMessage, MessageAPIResponseBase } from '@line/bot-sdk';
import {LINE_CHANNEL_ACCESS_TOKEN,LINE_CHANNEL_SECRET} from '@/config';


export interface LineConfigService  {

}

export const LINE_CONFIG_SERVICE = Symbol('LINE_CONFIG_SERVICE');

@Injectable()
export class LineConfigServiceImpl implements LineConfigService,OnApplicationBootstrap{
  private client = new Client({
    channelAccessToken:LINE_CHANNEL_ACCESS_TOKEN,
    channelSecret:LINE_CHANNEL_SECRET?LINE_CHANNEL_SECRET:''
  });

  constructor(

  ){}

  public onApplicationBootstrap() {

    // this.client.setWebhookEndpointUrl()
  }
}