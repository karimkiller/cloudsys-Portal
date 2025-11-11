import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateTicketDto } from './dto/create-ticket.dto'


@Injectable()
export class TicketsService {
constructor(private prisma: PrismaService) {}
list() { return this.prisma.ticket.findMany({ orderBy: { createdAt: 'desc' } }) }
create(dto: CreateTicketDto) { return this.prisma.ticket.create({ data: dto }) }
}