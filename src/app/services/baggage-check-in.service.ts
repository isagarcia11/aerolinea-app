import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../mensaje-dto';

@Injectable({
  providedIn: 'root'
})
export class BaggageCheckInService {

  private apiUrl = 'http://localhost:8080/api/equipajes';

  constructor(private http: HttpClient) { }

  public addBaggage(baggage:any):Observable<any>{
    return this.http.post(this.apiUrl, baggage)

  }
}
