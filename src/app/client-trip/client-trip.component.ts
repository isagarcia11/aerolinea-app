import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { FlightService, Flight } from '../services/flight.service';
@Component({
  selector: 'app-client-trip',
  templateUrl: './client-trip.component.html',
  styleUrl: './client-trip.component.css'
})
export class ClientTripComponent {
  tripForm: FormGroup;
  cities = [];
  constructor(private fb: FormBuilder, private flightService: FlightService) {
   
    this.tripForm = this.fb.group({
      tripType: ['oneWay'],
      originCity: [''],
      destinationCity: [''],
      serviceType: ['economy'],
      startDate: [''],
      returnDate: [''],
      tripCost: [0]
    });

  }
  bookTrip() {
    // Lógica para reservar el viaje
  }
}
