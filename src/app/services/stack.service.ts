import { Injectable } from '@angular/core';
import { Car} from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class StackService {
  private stack: Car[] = [];

  push(car: Car) { /* implementación */ }
  //pop(): Car | null { /* implementación */ }
  clear() { this.stack = []; }
}