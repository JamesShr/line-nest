import { Module } from '@nestjs/common';
import { NGROK_SERVICE,NgrokServiceImpl} from '@/modules/ngrok/ngrok.service';
 
const modules = [
  {
    provide: NGROK_SERVICE,
    useClass: NgrokServiceImpl,
  },
];

@Module({
  imports: [],
  controllers: [],
  providers: modules,
  exports: modules,
})
export class NgrokModule {}
