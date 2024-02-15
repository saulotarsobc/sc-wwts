import { Module } from '@nestjs/common';
import { UsersModule } from './users/user.module';
import { WwtsModule } from './wwts/wwts.module';
import { MessagesModule } from './messages/messages.module';
import { GroupsModule } from './groups/groups.module';
import { ChatsModule } from './chats/chats.module';

@Module({
  imports: [UsersModule, WwtsModule, MessagesModule, GroupsModule, ChatsModule],
  controllers: [],
  exports: [],
  providers: [],
})
export class AppModule {}
