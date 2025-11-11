import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'


@Injectable()
export class TemplatesService {
constructor(private prisma: PrismaService) {}
list() { return this.prisma.template.findMany({ orderBy: { createdAt: 'desc' } }) }
get(id: string) { return this.prisma.template.findUnique({ where: { id } }) }
create(name: string, jsonSchema: any) { return this.prisma.template.create({ data: { name, jsonSchema } }) }
}