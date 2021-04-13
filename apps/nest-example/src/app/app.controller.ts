import { Body, Controller, Get, Put } from '@nestjs/common';

import { AppService } from './app.service';
import { MessageDTO } from './models/message.dto';

@Controller({
  path: 'message',
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Route for fetching the current message.
   *
   * @returns The current message.
   */
  @Get()
  getData(): MessageDTO {
    return this.appService.getData();
  }

  /**
   * Updates the current message.
   *
   * @param newMessage The message to update to.
   * @returns The updated message.
   */
  @Put()
  update(@Body() newMessage: MessageDTO) {
    return this.appService.updateData(newMessage);
  }
}
