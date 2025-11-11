export class CreateTimeEntryDto {
  date!: Date
  durationMs!: number
  workType?: 'DEV' | 'SUPPORT' | 'MEETING' | 'TRAVEL'
  notes?: string
  projectId?: string
  clientId?: string
  ticketId?: string
  billable?: boolean
}
