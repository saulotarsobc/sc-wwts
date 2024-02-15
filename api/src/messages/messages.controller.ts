import { Body, Controller, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly service: MessagesService) {}

  @Post('sendMessage')
  sendMessage(@Body() data: any) {
    return this.service.sendMessage(data);
  }
}
