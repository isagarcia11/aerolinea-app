import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaggageCheckinComponent } from './baggage-checkin.component';

describe('BaggageCheckinComponent', () => {
  let component: BaggageCheckinComponent;
  let fixture: ComponentFixture<BaggageCheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaggageCheckinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaggageCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
