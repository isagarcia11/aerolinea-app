import { Injectable } from '@angular/core';
import { CrewMember } from '../model/crew-member';
import { of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrewMemberService {
  allCrewMembers: CrewMember[] = [];
  
  
  private crewMembersSubject = new BehaviorSubject<CrewMember[]>(this.allCrewMembers);
  
 
  crewMembers$ = this.crewMembersSubject.asObservable();

  getAllCrewMembers() {
    return of(this.allCrewMembers);
  }
}
