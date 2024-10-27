import { TestBed } from '@angular/core/testing';

import { CrewMemberService } from './services/crew-member.service';

describe('CrewMemberService', () => {
  let service: CrewMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrewMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
