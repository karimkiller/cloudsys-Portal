import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator'


class RegisterDto { @IsEmail() email: string; @MinLength(6) password: string; @IsOptional() @IsString() name?: string }
class LoginDto { @IsEmail() email: string; @MinLength(6) password: string }


@Controller('auth')
export class AuthController {
constructor(private auth: AuthService) {}
@Post('register') register(@Body() dto: RegisterDto) { return this.auth.register(dto.email, dto.password, dto.name) }
@Post('login') login(@Body() dto: LoginDto) { return this.auth.login(dto.email, dto.password) }
}