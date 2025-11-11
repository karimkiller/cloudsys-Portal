import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  @Get()
  root() {
    return { name: 'CloudSys API', docs: '/docs' }
  }

  @Get('health')
  health() {
    return { ok: true, at: new Date().toISOString() }
  }
}
