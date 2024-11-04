import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarQueueService {

  private apiUrl = 'http://localhost:8080/api/carros'; 

  constructor(private http: HttpClient) {}
  
  private carts = [
    { id: 'C1', load: 500 },
    { id: 'C2', load: 750 },
    { id: 'C3', load: 300 }
  ];

  getCarts() {
    return this.carts;
  }

  
  arrival(carro: Car): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/arrival`, carro);
  }

 
  departure(): Observable<Car> {
    return this.http.delete<Car>(`${this.apiUrl}/departure`);
  }

 
  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove/${id}`);
  }

  
  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}/all`);
  }
}
