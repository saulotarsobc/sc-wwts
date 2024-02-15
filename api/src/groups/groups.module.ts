import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { WwtsModule } from 'src/wwts/wwts.module';

@Module({
  imports: [WwtsModule],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
