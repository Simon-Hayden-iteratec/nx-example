import { Module } from '@nestjs/common';
import { ServicesModule } from '@nx-example/services';

import { AppController } from './app.controller';

@Module({
  imports: [
    ServicesModule,
  ],
  controllers: [
    AppController
  ],
  providers: [],
})
export class AppModule {}
