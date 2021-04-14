import { Test, TestingModule } from '@nestjs/testing';
import { MessageDTO, MessageService, MessageTypes } from '@nx-example/services';

import { MessageController } from './message.controller';

describe('MessageController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [MessageController],
      providers: [MessageService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to nest-example!"', () => {
      const messageController = app.get<MessageController>(MessageController);
      const message = new MessageDTO();
      message.message = 'Welcome to nest-example!';
      message.type = MessageTypes.MOTD;
      expect(messageController.getMessage()).toEqual(message);
    });
  });
});