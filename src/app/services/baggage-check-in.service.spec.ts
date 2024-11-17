import { TestBed } from '@angular/core/testing';

import { BaggageCheckInService } from './baggage-check-in.service';

describe('BaggageCheckInService', () => {
  let service: BaggageCheckInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaggageCheckInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
