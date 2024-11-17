import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { ClientTripService } from '../services/client-trip.service';
import { ClientTrip } from '../model/client-trip';
import { FlightService } from '../services/flight.service';
@Component({
  selector: 'app-client-trip',
  templateUrl: './client-trip.component.html',
  styleUrl: './client-trip.component.css'
})
export class ClientTripComponent implements OnInit {
  tripForm: FormGroup; 
  trip:any;
  travelTypes: string[];
  cities: string[];
  serviceTypes: string[];

  constructor(private tripService: ClientTripService, private flightService: FlightService) {
    this.trip ={
      travelType: '',
      originCity:'',
      destinationCity: '',
      startDate: new Date,
      returnDate: new Date,
      serviceType: '',
      costPerPerson: 0 
    }
    this.travelTypes = this.tripService.getTravelTypes();
    this.cities = this.tripService.getCities();
    this.serviceTypes = this.tripService.getServiceTypes();
  }
  ngOnInit(): void {
    this.tripForm.get('tripType')?.valueChanges.subscribe(value => {
      this.onTripTypeChange(value);
    });
  }

  onTripTypeChange(value: string): void {
    const returnDateControl = this.tripForm.get('returnDate');

    if (value === 'oneWay') {
      returnDateControl?.setValue(''); // Clear return date
      returnDateControl?.disable();     // Disable return date field
    } else {
      returnDateControl?.enable();      // Enable return date field
    }
  }

  bookTrip(): void {
    if (this.tripForm.valid) {
      console.log("Trip booked:", this.tripForm.value);
      // Lógica adicional de reserva
    }
  }
}
