import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDTO } from '../login-dto';
import { MensajeDTO } from '../mensaje-dto';
import { CrearUsuarioDTO } from '../crear-usuario-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private apiUrl = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient) { }

  public login (loginDTO: LoginDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.apiUrl}/iniciar-sesion`, loginDTO);
   }
   
   public crearUsuario(cuentaDTO: CrearUsuarioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.apiUrl}/crear-cuenta`, cuentaDTO);
   }

}
