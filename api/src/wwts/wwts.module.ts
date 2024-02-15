import { Module } from '@nestjs/common';
import { WwtsService } from './wwts.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [WwtsService],
  exports: [WwtsService],
})
export class WwtsModule {}
