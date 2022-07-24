import { Module } from '@nestjs/common';
import  {ConfigModule} from '@/modules/line/config/config.module';


const modules = [
 
];

@Module({
  imports: [
    ConfigModule,
  ],
  controllers: [],
  providers: modules,
  exports: modules,
})
export class LineModule {}
