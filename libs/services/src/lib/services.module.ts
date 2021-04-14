import { Module } from '@nestjs/common';
import { MessageService } from './services/message/message.service';

@Module({
  controllers: [],
  providers: [
    MessageService,
  ],
  exports: [
    MessageService,
  ],
})
export class ServicesModule {}
