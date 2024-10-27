import { TestBed } from '@angular/core/testing';

import { StackService } from './services/stack.service';

describe('StackService', () => {
  let service: StackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
