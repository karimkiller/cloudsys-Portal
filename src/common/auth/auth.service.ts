import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from '../prisma/prisma.service'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(private readonly jwt: JwtService, private readonly prisma: PrismaService) {}

  async register(email: string, password: string) {
    const hash = await bcrypt.hash(password, 10)
    const user = await this.prisma.user.create({ data: { email, passwordHash: hash } })
    return this.sign(user.id, user.email, user.role)
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } })
    if (!user || !user.passwordHash || !(await bcrypt.compare(password, user.passwordHash))) {
      throw new UnauthorizedException('Invalid credentials')
    }
    return this.sign(user.id, user.email, user.role)
  }

  private sign(sub: string, email: string | null, role: any) {
    const payload = { sub, email, role }
    return { access_token: this.jwt.sign(payload) }
  }
}
