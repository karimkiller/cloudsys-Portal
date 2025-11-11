import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common'
import { TimeEntriesService } from './time-entries.service'
import { CreateTimeEntryDto } from './dto/create-time-entry.dto'
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard'


@Controller('time-entries')
@UseGuards(JwtAuthGuard)
export class TimeEntriesController {
constructor(private svc: TimeEntriesService) {}
@Get() list(@Req() req: any) { return this.svc.list(req.user.id) }
@Post() create(@Req() req: any, @Body() dto: CreateTimeEntryDto) { return this.svc.create(req.user.id, dto) }
}