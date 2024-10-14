import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Flight {
  id: string;
  origin: string;
  destination: string;
  
}

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private apiUrl = 'https://api.example.com/flights';  // Cambia por la URL de tu API

  constructor(private http: HttpClient) {}

  // Método para obtener los datos del vuelo
  getFlight(flightId: number): Observable<Flight> {
    return this.http.get<Flight>(`${this.apiUrl}/${flightId}`);
  }
}