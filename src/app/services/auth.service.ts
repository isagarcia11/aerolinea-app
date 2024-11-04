import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private apiUrl = 'https://api.example.com/login';
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };

    return this.http.post<any>(this.apiUrl, body, { headers }).pipe(
      map(response => {
        // Guardar el token en localStorage o sessionStorage si la respuesta contiene un token
        if (response && response.token) {
          localStorage.setItem('authToken', response.token);
        }
        return response;
      })
    );
  }

  register(userData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/register`, userData, { headers });
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
