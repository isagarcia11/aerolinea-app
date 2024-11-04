import { TestBed } from '@angular/core/testing';

import { ClientTripService } from './client-trip.service';

describe('ClientTripService', () => {
  let service: ClientTripService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientTripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
