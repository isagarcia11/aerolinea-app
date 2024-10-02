import { Component } from '@angular/core';
import { Init } from 'v8';

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
  selectedFlight: any;              // Variable para almacenar el vuelo seleccionado
  purchaseData: any = {             // Objeto para almacenar datos de compra
    idNumber: '',
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    dob: '',
    residenceAddress: '',
    seats: { seat1: false, seat2: false } // Modificar según disponibilidad real
  };

  // Método para buscar vuelos
  searchFlights() {
    
  }

  // Método para seleccionar un vuelo
  selectFlight(flight: any) {
    
  }

  // Método para procesar la compra
  submitPurchase() {
  }
}