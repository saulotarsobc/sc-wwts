import { Module } from '@nestjs/common';
import { WwtsService } from './wwts.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { WwtsController } from './wwts.controller';

@Module({
  imports: [PrismaModule],
  controllers: [WwtsController],
  providers: [WwtsService],
  exports: [WwtsService],
})
export class WwtsModule {}
