import { Module } from '@nestjs/common';
import{LINE_CONFIG_SERVICE,LineConfigServiceImpl} from '@/modules/line/config/config.service';


const modules = [
 {
  provide: LINE_CONFIG_SERVICE,
  useClass: LineConfigServiceImpl
 }
];

@Module({
  imports: [],
  controllers: [],
  providers: modules,
  exports: modules,
})
export class ConfigModule {}
