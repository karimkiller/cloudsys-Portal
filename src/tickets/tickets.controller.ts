import { Body, Controller, Get, Post } from '@nestjs/common'
import { TicketsService } from './tickets.service'
import { CreateTicketDto } from './dto/create-ticket.dto'

@Controller('tickets')
export class TicketsController {
  constructor(private readonly svc: TicketsService) {}

  @Get()
  list() {
    return this.svc.list()
  }

  @Post()
  create(@Body() dto: CreateTicketDto) {
    return this.svc.create(dto)
  }
}
