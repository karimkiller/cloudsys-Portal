export class CreateTicketDto {
  title!: string
  description?: string
  type?: 'BUG' | 'TASK' | 'FEATURE' | 'SUPPORT'
  priority?: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
  projectId?: string
  clientId?: string
  dueAt?: Date
  tags?: string[]
}
