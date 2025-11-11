import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard'
import { TicketsService } from './tickets.service'
import { CreateTicketDto } from './dto/create-ticket.dto'

@Controller('tickets')
export class TicketsController {
  constructor(private readonly svc: TicketsService) {}

  @Get()
  list() {
    return this.svc.list()
  }

 @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateTicketDto) { return this.svc.create(dto) }
}
