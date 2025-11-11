import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard'
import { TimeEntriesService } from './time-entries.service'
import { CreateTimeEntryDto } from './dto/create-time-entry.dto'

@Controller('time-entries')
export class TimeEntriesController {
  constructor(private readonly svc: TimeEntriesService) {}

  @Get()
  list() {
    return this.svc.list()
  }

  // For now, use a dummy userId; later wire to JWT auth
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Request() req, @Body() dto: CreateTimeEntryDto) {
    return this.svc.create(req.user.sub, dto)
  }
}
