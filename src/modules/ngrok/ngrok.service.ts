import {Injectable,Logger,OnModuleInit} from '@nestjs/common';
import  Ngrok  from 'ngrok';
import {SERVER_PORT,NGROK_ACCESS_TOKEN} from '@/config';


export interface NgrokService  {
  getUrl():string;
  refreshUrl(): Promise<void>;
}

export const NGROK_SERVICE = Symbol('NGROK_SERVICE');

@Injectable()
export class NgrokServiceImpl implements NgrokService,OnModuleInit{
  public url:string;

  constructor(

  ){}

  public async onModuleInit() {
    // this.url = await this.generateUrl();
    setInterval(async ()=>{
      this.url = await this.generateUrl();
    },8 * 60 * 60 * 1000)
  }

  public getUrl(): string {
    return this.url;
  };

  public async refreshUrl(): Promise<void> {
    this.url = await this.generateUrl();
  }

  public async generateUrl():Promise<string>{
    const url =  (await Ngrok.connect({
      authtoken:NGROK_ACCESS_TOKEN?NGROK_ACCESS_TOKEN:undefined,
      addr:SERVER_PORT
   }));
   Logger.log(`Ngrok generate url ${url} for http port : ${SERVER_PORT}`)
   return url;
  }
}