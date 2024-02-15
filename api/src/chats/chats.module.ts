import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { WwtsModule } from 'src/wwts/wwts.module';

@Module({
  imports: [WwtsModule],
  controllers: [ChatsController],
  providers: [ChatsService],
})
export class ChatsModule {}
