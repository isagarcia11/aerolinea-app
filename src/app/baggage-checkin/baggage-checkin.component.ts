import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-baggage-checkin',
  templateUrl: './baggage-checkin.component.html',
  styleUrls: ['./baggage-checkin.component.css']
})
export class BaggageCheckinComponent implements OnInit {
  baggageForm: FormGroup;
  allowedBaggage: any = { pieces: 0, maxWeight: 0 };
  excessCost: number = 0;
  petCost: number = 0;
  totalCost: number = 0;

  availableFlights = [ ];
  
 


  constructor(private fb: FormBuilder) {
    this.baggageForm = this.fb.group({
      passengerName: ['', Validators.required],
      ticketClass: ['', Validators.required],
      travelType: ['', Validators.required],
      baggage: this.fb.array([]),
      hasPet: [false],
      petWeight: [null]
    });

  }

  ngOnInit() {
    this.baggageForm.get('ticketClass')?.valueChanges.subscribe(value => {
      this.updateBaggagePolicy();
    });
    this.baggageForm.get('travelType')?.valueChanges.subscribe(value => {
      this.updateBaggagePolicy();
    });
    
  }
  
  get baggage(): FormArray {
    return this.baggageForm.get('baggage') as FormArray;
  }

  addBaggage() {
    const baggageItem = this.fb.group({
      weight: [null, Validators.required],
      dimensions: [null, Validators.required]
    });
    this.baggage.push(baggageItem);
  }

  updateBaggagePolicy() {
    const ticketClass = this.baggageForm.get('ticketClass')?.value;
    const travelType = this.baggageForm.get('travelType')?.value;
    
    if (ticketClass === 'economy' && travelType === 'national') {
      this.allowedBaggage = { pieces: 1, maxWeight: 24 };
    } else if (ticketClass === 'business' && travelType === 'national') {
      this.allowedBaggage = { pieces: 2, maxWeight: 34 };
    } else if (ticketClass === 'economy' && travelType === 'international') {
      this.allowedBaggage = { pieces: 2, maxWeight: 24 };
    } else if (ticketClass === 'business' && travelType === 'international') {
      this.allowedBaggage = { pieces: 2, maxWeight: 34 };
    }
  }

  onSubmit() {
    this.calculateCosts();
    console.log(this.baggageForm.value);
  }

  calculateCosts() {
    this.excessCost = this.calculateExcessCost();
    this.petCost = this.calculatePetCost();
    this.totalCost = this.excessCost + this.petCost;
  }

  calculateExcessCost(): number {
    let excessWeight = 0;
    this.baggage.controls.forEach((item) => {
      const weight = item.get('weight')?.value;
      if (weight > this.allowedBaggage.maxWeight) {
        excessWeight += weight - this.allowedBaggage.maxWeight;
      }
    });
    return excessWeight * 8 * 1.0675;  // 8 USD por kilo + 6.75% impuesto
  }

  calculatePetCost(): number {
    const petWeight = this.baggageForm.get('petWeight')?.value;
    if (petWeight >= 3 && petWeight <= 9) {
      return 48;
    } else if (petWeight > 9) {
      return 48 + (petWeight - 9) * 2;
    }
    return 0;
  }
}
