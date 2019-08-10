export class Servant {
  ID?: string;
  ServantName?: string;
  ServantEmail?: string;
  ServantMobile?: string;
  constructor(
    ID: string,
    ServantName: string,
    ServantEmail: string,
    ServantMobile: string
  ) {
    this.ID = ID;
    this.ServantName = ServantName;
    this.ServantEmail = ServantEmail;
    this.ServantMobile = ServantMobile;
  }
}
