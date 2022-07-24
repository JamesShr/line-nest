import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {NgrokModule} from '@/modules/ngrok/ngrok.module';
import {LineModule} from '@/modules/line/line.module';


@Module({
  imports: [
    NgrokModule,
    LineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
