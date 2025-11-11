import { Injectable } from '@nestjs/common'
import { PrismaService } from '../common/prisma/prisma.service'
import { CreateTimeEntryDto } from './dto/create-time-entry.dto'

@Injectable()
export class TimeEntriesService {
  constructor(private readonly prisma: PrismaService) {}

  list() {
    return this.prisma.timeEntry.findMany({ orderBy: { createdAt: 'desc' } })
  }

  create(userId: string, dto: CreateTimeEntryDto) {
    return this.prisma.timeEntry.create({ data: {
      userId,
      date: new Date(dto.date),
      durationMs: dto.durationMs,
      workType: (dto.workType ?? 'DEV') as any,
      notes: dto.notes ?? null,
      projectId: dto.projectId ?? null,
      clientId: dto.clientId ?? null,
      ticketId: dto.ticketId ?? null,
      billable: dto.billable ?? true,
    }})
  }
}
