import { Injectable } from '@angular/core';
import { Dequedata } from '../model/dequedata';
import { Car } from '../model/car';



@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  private deque = new Dequedata();
  private maxCapacity = 10;
  private waitingQueue: Car[] = [];

  // Métodos para agregar, eliminar, y retirar carros
  addCar(car: Car) { /* implementación */ }
  removeCar() { /* implementación */ }
  removeSpecificCar(carId: number) { /* implementación que usa StackService */ }
}