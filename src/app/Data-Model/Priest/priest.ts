export class Priest {
  ID?: string;
  PriestName?: string;
  PriestChurch?: string;
  constructor(ID: string, PriestName: string, PriestChurch: string) {
    this.ID = ID;
    this.PriestName = PriestName;
    this.PriestChurch = PriestChurch;
  }
}
