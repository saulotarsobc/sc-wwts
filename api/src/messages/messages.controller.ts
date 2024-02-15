import { Body, Controller, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post('sendMessage')
  sendMessage(@Body() data: any) {
    return this.messagesService.sendMessage(data);
  }
}
