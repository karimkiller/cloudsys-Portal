import { Injectable } from '@nestjs/common'
import { PrismaService } from '../common/prisma/prisma.service'
import { CreateTicketDto } from './dto/create-ticket.dto'

@Injectable()
export class TicketsService {
  constructor(private readonly prisma: PrismaService) {}

  list() {
    return this.prisma.ticket.findMany({ orderBy: { createdAt: 'desc' } })
  }

  create(dto: CreateTicketDto) {
    return this.prisma.ticket.create({ data: {
      title: dto.title,
      description: dto.description ?? '',
      type: (dto.type ?? 'SUPPORT') as any,
      priority: (dto.priority ?? 'MEDIUM') as any,
      projectId: dto.projectId ?? null,
      clientId: dto.clientId ?? null,
      dueAt: dto.dueAt ?? null,
      tags: dto.tags ?? [],
    }})
  }
}
