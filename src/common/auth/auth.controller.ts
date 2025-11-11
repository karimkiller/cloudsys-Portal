import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'

class RegisterDto {
  email!: string
  password!: string
}
class LoginDto {
  email!: string
  password!: string
}

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    // TODO: create user in DB; return token for now
    return { access_token: this.auth.sign({ sub: 'user-id', email: dto.email }) }
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return { access_token: this.auth.sign({ sub: 'user-id', email: dto.email }) }
  }
}
