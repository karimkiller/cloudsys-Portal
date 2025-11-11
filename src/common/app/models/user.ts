export type Role = 'OWNER'|'ADMIN'|'MANAGER'|'DEVELOPER'|'CONTRACTOR'|'CLIENT'
export interface JwtPayload { sub: string; email: string; role: Role; iat?: number; exp?: number }