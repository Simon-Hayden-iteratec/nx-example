import { Test, TestingModule } from '@nestjs/testing';
import { MessageDTO, MessageService, MessageTypes } from '@nx-example/services';

import { AppController } from './app.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [MessageService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to nest-example!"', () => {
      const appController = app.get<AppController>(AppController);
      const message = new MessageDTO();
      message.message = 'Welcome to nest-example!';
      message.type = MessageTypes.MOTD;
      expect(appController.getMessage()).toEqual(message);
    });
  });
});
