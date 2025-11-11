import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  @Get()
  root() {
    return { name: 'CloudSys API', docs: '/docs' }
  }

 @Get('health')
health() {
  return { status: 'ok', uptime: process.uptime() };
}

}
