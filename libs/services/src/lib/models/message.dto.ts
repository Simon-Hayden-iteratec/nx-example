import { IsEnum, IsNotEmpty } from 'class-validator';


export enum MessageTypes {
  MOTD = 'motd',
  NOTIFICATION = 'notification',
}

/**
 * DTO to transfer a message.
 */
export class MessageDTO {

  /**
   * Factory function to create DTOs.
   *
   * @param message The message of the DTO.
   * @param type The type of the DTO.
   * @returns A newly created MessageDTO.
   */
  static createMessage(message: string, type: MessageTypes) {
    const msg = new MessageDTO();
    msg.message = message;
    msg.type = type;
    return msg;
  }

  // The message to transfer
  @IsNotEmpty({})
  message: string;

  @IsEnum(MessageTypes)
  type: MessageTypes = MessageTypes.MOTD;
}