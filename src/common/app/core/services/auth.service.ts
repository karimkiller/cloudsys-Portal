import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import jwtDecode from 'jwt-decode'
import { JwtPayload } from '../models/user'


@Injectable({ providedIn: 'root' })
export class AuthService {
private tokenKey = 'cloudsys.token'
constructor(private http: HttpClient) {}
register(body: { email: string; password: string; name?: string }) { return this.http.post<{access_token:string}>(`${environment.apiBase}/auth/register`, body) }
login(body: { email: string; password: string }) { return this.http.post<{access_token:string}>(`${environment.apiBase}/auth/login`, body) }
setToken(t: string) { localStorage.setItem(this.tokenKey, t) }
get token() { return localStorage.getItem(this.tokenKey) }
logout() { localStorage.removeItem(this.tokenKey) }
get me(): JwtPayload | null { const t = this.token; return t ? (jwtDecode(t) as JwtPayload) : null }
get isAuthenticated() { return !!this.token }
}