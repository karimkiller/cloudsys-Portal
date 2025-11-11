import { Module } from '@nestjs/common'
import { PrismaService } from './common/prisma/prisma.service'
import { AuthModule } from './auth/auth.module'
import { TicketsModule } from './tickets/tickets.module'
import { TimeEntriesModule } from './time-entries/time-entries.module'

@Module({
  imports: [AuthModule, TicketsModule, TimeEntriesModule],
  providers: [PrismaService],
})
export class AppModule {}
