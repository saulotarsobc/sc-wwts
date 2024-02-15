import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { WwtsModule } from 'src/wwts/wwts.module';

@Module({
  imports: [WwtsModule],
  controllers: [MessagesController],
  exports: [],
  providers: [MessagesService],
})
export class MessagesModule {}
