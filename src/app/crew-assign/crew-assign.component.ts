import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { FlightService, Flight } from '../services/flight.service';


@Component({
  selector: 'app-crew-assign',
  templateUrl: './crew-assign.component.html',
  styleUrl: './crew-assign.component.css'
})
export class CrewAssignComponent implements OnInit{
  crewForm: FormGroup;
  flight: Flight | null = null;

  constructor(private fb: FormBuilder, private flightService: FlightService) {
  }
  ngOnInit() {
  this.crewForm = this.fb.group({
    crewName: [''],
    crewRole: [''],
    assignedFlight: ['']});
    this.getFlightData(1);
}
getFlightData(flightId: number): void {
  this.flightService.getFlight(flightId).subscribe(
    (data: Flight) => {
      this.flight = data;  // Asignamos los datos cuando la respuesta llega
    },
    (error) => {
      console.error('Error fetching flight data:', error);
    }
  );
}

addCrewMember() {
  // Lógica para agregar tripulante
}
}
