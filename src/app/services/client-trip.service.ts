import { Injectable } from '@angular/core';
import { FlightService } from '../services/flight.service';

@Injectable({
  providedIn: 'root'
})
export class ClientTripService {
  
  travelTypes: string[] = [];
  cities: string[] = [];
  serviceTypes: string[] = [];

  constructor(private flightService:FlightService) {

    this.flightService.getCities().subscribe({
      next: (data) => {
        this.cities = data;
      },
      error: (data) => {
        console.log(data);
      }
    });

    this.flightService.getTravelTypes().subscribe({
      next: (data) => {
        this.travelTypes = data;
      }, 
      error: (data) => {
        console.log(data);
      }
    });

    this.flightService.getServiceTypes().subscribe({
      next: (data) => {
        this.serviceTypes = data;
      }, 
      error: (data) => {
        console.log(data);
      }
    });

  }
  // Agregar métodos para obtener los datos
  getTravelTypes(): string[] {
    return this.travelTypes;
  }

  getCities(): string[] {
    return this.cities;
  }

  getServiceTypes(): string[] {
    return this.serviceTypes;
  }

  
 
}
