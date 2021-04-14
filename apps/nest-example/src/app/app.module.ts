
import { Module } from '@nestjs/common';
import { ServicesModule } from '@nx-example/services';
import { MessageController } from './routes/message/message.controller';

@Module({
  imports: [
    ServicesModule,
  ],
  controllers: [
    MessageController,
  ],
  providers: [],
})
export class AppModule { }
