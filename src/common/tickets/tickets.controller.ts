import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { TicketsService } from './tickets.service'
import { CreateTicketDto } from './dto/create-ticket.dto'
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard'


@Controller('tickets')
@UseGuards(JwtAuthGuard)
export class TicketsController {
constructor(private svc: TicketsService) {}
@Get() list() { return this.svc.list() }
@Post() create(@Body() dto: CreateTicketDto) { return this.svc.create(dto) }
}