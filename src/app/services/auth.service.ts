import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Input } from '@angular/core';
import { AuthResponse, Login } from '../interfaces/login';
import dev from '../environments/dev';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient, private router: Router) { }

  login(credenciales:any): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${dev.apiUrl}/auth/login`, credenciales)
  }

  setToken(token: string) {
    localStorage.setItem('authToken', token)
  }

  logout() {
    localStorage.removeItem('authToken')
    this.router.navigateByUrl('/login')
  }
}
