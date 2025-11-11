import { IsEnum, IsOptional, IsString } from 'class-validator'
import { TicketPriority, TicketStatus, TicketType } from '@prisma/client'


export class CreateTicketDto {
@IsString() title: string
@IsString() description: string
@IsOptional() @IsEnum(TicketType) type?: TicketType
@IsOptional() @IsEnum(TicketPriority) priority?: TicketPriority
@IsOptional() @IsEnum(TicketStatus) status?: TicketStatus
@IsOptional() assigneeId?: string
@IsOptional() projectId?: string
@IsOptional() clientId?: string
}