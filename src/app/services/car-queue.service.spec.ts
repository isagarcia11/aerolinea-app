import { TestBed } from '@angular/core/testing';

import { CarQueueService } from './services/car-queue.service';

describe('CarQueueService', () => {
  let service: CarQueueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarQueueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
