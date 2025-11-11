import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from './prisma/prisma.service'
import { AuthModule } from './auth/auth.module'
import { TicketsModule } from './tickets/tickets.module'
import { TimeEntriesModule } from './time-entries/time-entries.module'
// TODO: import TemplatesModule, FormsModule, ClientsModule, ProjectsModule, AnnouncementsModule


@Module({
imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, TicketsModule, TimeEntriesModule],
providers: [PrismaService],
})
export class AppModule {}