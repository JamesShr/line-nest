import { Controller, Get } from '@nestjs/common';
import {INFO_VERSION} from '@/config';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return `Connect Success , version : ${INFO_VERSION}`;
  }
}
