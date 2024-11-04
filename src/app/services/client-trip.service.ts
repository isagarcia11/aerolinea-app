import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientTripService {
  travelTypes: string[] = ['One Way', 'Round Trip'];
  cities: string[] = ['CDMX', 'Buenos Aires', 'Monterrey', 'Cancun','Los Angeles','Bogota','Panama'];
  serviceTypes: string[] = ['Economic', 'Business'];

  constructor() {}

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
