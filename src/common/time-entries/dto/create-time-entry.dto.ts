import { IsBoolean, IsDateString, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'
import { WorkType } from '@prisma/client'


export class CreateTimeEntryDto {
@IsDateString() date: string
@IsNumber() durationMs: number
@IsEnum(WorkType) workType: WorkType
@IsOptional() @IsString() notes?: string
@IsOptional() projectId?: string
@IsOptional() clientId?: string
@IsOptional() ticketId?: string
@IsOptional() @IsBoolean() billable?: boolean
}