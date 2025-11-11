// src/app.module.ts
import { Module } from '@nestjs/common'
import { AuthModule } from './common/auth/auth.module'
import { TicketsModule } from './tickets/tickets.module'
import { TimeEntriesModule } from './time-entries/time-entries.module'
import { PrismaService } from './common/prisma/prisma.service'

@Module({
  imports: [AuthModule, TicketsModule, TimeEntriesModule],
  providers: [PrismaService],
})
export class AppModule {}
