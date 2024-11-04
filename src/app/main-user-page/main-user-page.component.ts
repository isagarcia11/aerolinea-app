import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-main-user-page',
  templateUrl: './main-user-page.component.html',
  styleUrl: './main-user-page.component.css'
})
export class MainUserPageComponent{
  tripType: string = 'roundTrip';  
  departure: string = '';           
  destination: string = '';         
  departureDate: string = '';       
  returnDate: string = '';          
  numPassengers: number = 1;        
  travelClass: string = 'economy';  
  flights: any[] = [];              
  selectedFlight: any;              
  purchaseData: any = {            
    idNumber: '',
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    dob: '',
    residenceAddress: '',
    seats: { seat1: false, seat2: false } // Modificar según disponibilidad real
  };
  constructor(private flightService: FlightService) {}

  // Método para buscar vuelos
  searchFlights() {
    this.flightService.searchFlights(this.departure, this.destination, this.departureDate, this.returnDate, this.numPassengers, this.travelClass)
      .subscribe(
        (flights) => this.flights = flights,
        (error) => console.error('Error al buscar vuelos', error)
      );
  }

  // Método para seleccionar un vuelo
  selectFlight(flight: any) {
    this.selectedFlight = flight;
  }

  // Método para procesar la compra
  submitPurchase() {
    this.flightService.submitPurchase(this.purchaseData)
      .subscribe(
        (response) => console.log('Compra realizada con éxito', response),
        (error) => console.error('Error en el procesamiento de la compra', error)
      );
  }
}
