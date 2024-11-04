import { Component, OnInit } from '@angular/core';
import { CrewMemberService } from '../services/crew-member.service';
import { CrewMember } from '../model/crew-member';
import { RequiredCrew } from '../model/required-crew';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-crew-assignment',
  templateUrl: './crew-assign.component.html',
  styleUrls: ['./crew-assign.component.css']
})
export class CrewAssignComponent implements OnInit {
  
    crewMembers: CrewMember[] = [];
    selectedCommander: string = '';
    selectedAttendants: string[] = [];
    selectedCoPilot: string = '';
    selectedAircraft: string = '';
    flightNumber: string = '';
    requiredCrew: RequiredCrew = {
      commander: null,
      copilot: null,
      attendants: [] 
    }
  
    constructor(private crewMemberService: CrewMemberService) { this.loadCrewMembers();}
  
    ngOnInit() {
      this.crewMemberService.getAllCrewMembers().subscribe(members => this.crewMembers = members);
    }
  
    onAircraftSelection(event: Event) {
      const target = event.target as HTMLSelectElement; 
      this.selectedAircraft = target.value; 
      
      // Establecer la cantidad de asistentes de vuelo requeridos
      const numAttendants = this.selectedAircraft === 'A320' ? 3 : 7;
      this.requiredCrew.attendants = new Array(numAttendants).fill(null);
    }
  
    loadCrewMembers() {
      this.crewMemberService.getAllCrewMembers().subscribe(members => {
        this.crewMembers = members; // Asigna los miembros a la variable
      });
    }
  
    availableCrewMembers(): CrewMember[] {
      const selectedMemberIds = new Set<number>(); 
  
      // Agregar los miembros seleccionados
      if (this.requiredCrew.commander) {
        selectedMemberIds.add(this.requiredCrew.commander.id);
      }
      if (this.requiredCrew.copilot) {
        selectedMemberIds.add(this.requiredCrew.copilot.id);
      }
      this.requiredCrew.attendants.forEach(attendant => {
        if (attendant) {
          selectedMemberIds.add(attendant.id);
        }
      });
  
      // Filtrar los miembros disponibles
      return this.crewMembers.filter(member => !selectedMemberIds.has(member.id));
    }
  
    resetCrewAssignment() {
      this.requiredCrew.commander = null;
      this.requiredCrew.copilot = null;
      this.requiredCrew.attendants = [];
      const attendantsCount = this.selectedAircraft === 'A320' ? 3 : 7;
      this.selectedAttendants = Array(attendantsCount).fill('');
      this.requiredCrew.attendants = Array(attendantsCount).fill(null);
    }

    getCrewMemberById(id: string): CrewMember | undefined {
      const numericId = Number(id); 
      return this.crewMembers.find(member => member.id === numericId);
    }
    
  
    assignCrewMember(role: string, memberId: string | undefined, index?: number) {
      if (memberId) { 
        const member = this.getCrewMemberById(memberId); // `getCrewMemberById` retorna `CrewMember | undefined`
        if (member) {
          if (role === 'commander') {
            this.requiredCrew.commander = member;
          } else if (role === 'copilot') {
            this.requiredCrew.copilot = member;
          } else if (role === 'attendant' && index !== undefined) {
            this.requiredCrew.attendants[index] = member;
          }
        }
      }
    }
    saveAssignment() {
      // Lógica para guardar la asignación de la tripulación, la ruta y el número de vuelo
      console.log('Save assignment:', {
        aircraft: this.selectedAircraft,
        crew: this.requiredCrew,
        flightNumber: this.flightNumber // Agrega el número de vuelo
      });
    
}
}
