import { Test, TestingModule } from '@nestjs/testing';
import { MessageDTO, MessageTypes } from '../../models';
import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageService],
    }).compile();

    service = module.get<MessageService>(MessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an initial message', () => {
    expect(service.getData()).not.toBeNull()
  });

  it('should update the message', () => {
    const message = new MessageDTO();
    message.message = 'new message';
    message.type = MessageTypes.NOTIFICATION;
    service.updateData(message);
    expect(service.getData()).toEqual(message)
  });

  it('should return the new message on update', () => {
    const message = new MessageDTO();
    message.message = 'new message';
    message.type = MessageTypes.MOTD;
    expect(service.updateData(message)).toEqual(message);
  });
});
