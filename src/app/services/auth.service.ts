import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth'; //URL del back

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };

    return this.http.post(`${this.baseUrl}/login`, body, { headers })
      .pipe(
        map((response: any) => {
          // Guardar el token JWT en el localStorage si el login es exitoso
          if (response && response.token) {
            localStorage.setItem('token', response.token);
          }
          return response;
        })
      );
  }
  register(userData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseUrl}/register`, userData, { headers });
  }

  logout(): void {
    // Elimina el token al cerrar sesión
    localStorage.removeItem('token');
  }

  // Método para obtener el token si es necesario
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
