import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { JwtStrategy } from '../strategies/jwt.strategy'
import { PrismaService } from '../prisma/prisma.service'
@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET ?? 'secret',
    signOptions: { expiresIn: (process.env.JWT_EXPIRES_IN ?? '7d') as any },
  })],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, PrismaService],
  exports: [JwtModule, AuthService],
})
export class AuthModule {}

