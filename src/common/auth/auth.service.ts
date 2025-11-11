import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'


@Injectable()
export class AuthService {
constructor(private prisma: PrismaService, private jwt: JwtService) {}


async register(email: string, password: string, name?: string) {
const hash = await bcrypt.hash(password, 12)
const user = await this.prisma.user.create({ data: { email, passwordHash: hash, name } })
return this.sign(user)
}


async login(email: string, password: string) {
const user = await this.prisma.user.findUnique({ where: { email } })
if (!user || !user.passwordHash || !(await bcrypt.compare(password, user.passwordHash)))
throw new UnauthorizedException('Invalid credentials')
return this.sign(user)
}


private async sign(user: any) {
const payload = { sub: user.id, email: user.email, role: user.role }
return { access_token: await this.jwt.signAsync(payload) }
}
}