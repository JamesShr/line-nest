import {Logger} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SERVER_PORT} from '@/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(SERVER_PORT,()=>{
    Logger.log(`Server listen on port : ${SERVER_PORT}`)
  });
}
bootstrap();
