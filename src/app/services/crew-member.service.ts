import { Injectable } from '@angular/core';
import { CrewMember } from '../model/crew-member';
import { of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrewMemberService {
  allCrewMembers: CrewMember[] = [
    { id: 1, name: 'John Doe', address: '123 Elm St', email: 'john@example.com', dateOfBirth: '1990-01-01', education: 'Bachelor\'s in Aviation' },
    { id: 2, name: 'Jane Smith', address: '456 Oak St', email: 'jane@example.com', dateOfBirth: '1992-02-02', education: 'Master\'s in Aeronautics' },
    { id: 3, name: 'Alice Johnson', address: '789 Pine St', email: 'alice@example.com', dateOfBirth: '1988-03-03', education: 'Bachelor\'s in Hospitality' },
    { id: 4, name: 'Bob Brown', address: '321 Maple St', email: 'bob@example.com', dateOfBirth: '1985-04-04', education: 'Diploma in Flight Attending' },
    { id: 5, name: 'Charlie Black', address: '654 Birch St', email: 'charlie@example.com', dateOfBirth: '1995-05-05', education: 'Bachelor\'s in Aviation Management' },
    { id: 6, name: 'Diana White', address: '987 Cedar St', email: 'diana@example.com', dateOfBirth: '1991-06-06', education: 'Bachelor\'s in Business' },
    { id: 7, name: 'Ethan Green', address: '159 Cherry St', email: 'ethan@example.com', dateOfBirth: '1987-07-07', education: 'Bachelor\'s in Hospitality' },
    { id: 8, name: 'Fiona Gray', address: '753 Walnut St', email: 'fiona@example.com', dateOfBirth: '1986-08-08', education: 'Bachelor\'s in Tourism' },
    { id: 9, name: 'George Blue', address: '951 Fir St', email: 'george@example.com', dateOfBirth: '1989-09-09', education: 'Bachelor\'s in Aeronautics' }
    
    // Agrega más miembros de la tripulación según sea necesario
  ];
    private crewMembersSubject = new BehaviorSubject<CrewMember[]>(this.allCrewMembers);
  
  // Exponer el observable
  crewMembers$ = this.crewMembersSubject.asObservable();

  getAllCrewMembers() {
    return of(this.allCrewMembers);
  }
}
