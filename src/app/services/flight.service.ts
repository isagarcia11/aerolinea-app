// flight.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private apiUrl = 'http://localhost:8080/?';

  constructor(private http: HttpClient) {}

 
  searchFlights(departure: string, destination: string, departureDate: string, returnDate: string, numPassengers: number, travelClass: string): Observable<any> {
    const params = {
      departure,
      destination,
      departureDate,
      returnDate,
      numPassengers: numPassengers.toString(),
      travelClass
    };
    return this.http.get<any[]>(`${this.apiUrl}/search`, { params });
  }

  
  selectFlight(flightId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/flight/${flightId}`);
  }

  getCities(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cities`);
  }

  getTravelTypes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/traveltypes`);
  }

  getServiceTypes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/serviceTypes`);
  }



  
  submitPurchase(purchaseData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/purchase`, purchaseData);
  }
}
