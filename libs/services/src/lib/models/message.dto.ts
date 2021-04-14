import { IsEnum, IsNotEmpty } from 'class-validator';


export enum MessageTypes {
  MOTD = 'motd',
  NOTIFICATION = 'notification',
}

/**
 * DTO to transfer a message.
 */
export class MessageDTO {
  // The message to transfer
  @IsNotEmpty({})
  message: string;

  @IsEnum(MessageTypes)
  type: MessageTypes = MessageTypes.MOTD;
}