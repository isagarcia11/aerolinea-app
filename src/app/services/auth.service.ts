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
        // Guardar el token y el rol en localStorage si la respuesta contiene ambos
        if (response && response.token && response.role) {
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('userRole', response.role); // Guardar el rol
        }
        return response;
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  
  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }


  register(userData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/register`, userData, { headers });
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
