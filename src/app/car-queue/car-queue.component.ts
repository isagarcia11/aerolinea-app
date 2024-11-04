import { Component, OnInit } from '@angular/core';
import { Car} from '../model/car';
import { CarQueueService } from '../services/car-queue.service';

@Component({
  selector: 'app-car-queue',
  templateUrl: './car-queue.component.html',
  styleUrl: './car-queue.component.css'
})
export class CarQueueComponent implements OnInit {
  carts: Car[] = [];
  
  constructor(private cartService: CarQueueService){
   
  }

  ngOnInit(): void {
    this.loadCarts();
  }

 
  loadCarts(): void {
    this.cartService.getAll().subscribe((data) => {
      this.carts = data;
    });
  }

  
  addArrival(cartId: string): void {
    const cart: Car = {
      id: Number(cartId), // Convert string to number here
      load: 500
    };
    this.onArrival(cart);
  }

  onArrival(cart: Car): void {
    this.cartService.arrival(cart).subscribe(() => this.loadCarts());
  }

  
  onDeparture(): void {
    this.cartService.departure().subscribe(() => this.loadCarts());
  }

 
  onRemove(id: string): void {
    this.cartService.remove(id).subscribe(() => this.loadCarts());
  }
}
