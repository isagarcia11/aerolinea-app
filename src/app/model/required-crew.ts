
import { CrewMember } from '../model/crew-member';
export interface RequiredCrew {
    commander: CrewMember | null;
  copilot: CrewMember | null;
  attendants: CrewMember[];
}
