import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateTimeEntryDto } from './dto/create-time-entry.dto'


@Injectable()
export class TimeEntriesService {
constructor(private prisma: PrismaService) {}
list(userId: string) { return this.prisma.timeEntry.findMany({ where: { userId }, orderBy: { date: 'desc' } }) }
async create(userId: string, dto: CreateTimeEntryDto) {
return this.prisma.timeEntry.create({ data: { ...dto, userId, date: new Date(dto.date) } })
}
}