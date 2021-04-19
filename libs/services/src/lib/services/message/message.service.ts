import { Injectable } from '@nestjs/common';
import { MessageDTO, MessageTypes } from '@nx-example/services';

@Injectable()
export class MessageService {
  private dto: MessageDTO = MessageDTO.createMessage(
    'Welcome to nest-example!',
    MessageTypes.MOTD,
  );

  getData(): MessageDTO {
    return this.dto;
  }

  updateData(newMessage: MessageDTO) {
    return this.dto = newMessage;
  }
}
