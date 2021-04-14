import { Body, Controller, Get, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MessageService, MessageDTO } from '@nx-example/services';
import { docTag, path } from './path';

@ApiTags(docTag)
@Controller({
  path,
})
export class MessageController {
  constructor(
    private readonly messageService: MessageService,
  ) {}

  /**
   * Route for fetching the current message.
   *
   * @returns The current message.
   */
   @Get()
   getMessage(): MessageDTO {
     return this.messageService.getData();
   }

   /**
    * Updates the current message.
    *
    * @param newMessage The message to update to.
    * @returns The updated message.
    */
   @Put()
   updateMessage(@Body() newMessage: MessageDTO) {
     return this.messageService.updateData(newMessage);
   }
}
