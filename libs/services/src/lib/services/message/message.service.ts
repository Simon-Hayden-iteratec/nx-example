import { Injectable } from '@nestjs/common';
import { MessageDTO, MessageTypes } from '@nx-example/services';

@Injectable()
export class MessageService {
  private dto: MessageDTO = new MessageDTO();

  constructor() {
    this.dto.message = 'Welcome to nest-example!';
    this.dto.type = MessageTypes.MOTD;
  }

  getData(): MessageDTO {
    return this.dto;
  }

  updateData(newMessage: MessageDTO) {
    return this.dto = newMessage;
  }
}
