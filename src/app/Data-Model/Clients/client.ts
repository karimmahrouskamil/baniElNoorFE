import { Address } from "../Address/address";
import { Zone } from "../Zone/zone";
import { Priest } from "../Priest/priest";
import { Servant } from "../Servant/servant";
import { Classes } from '../Classes/classes';

export class Client {
  Name?: string;
  Info?: string;
  GraduationYearID?: number;
  Email?: string;
  LocationX?: number;
  LocationY?: number;
  Note?: string;
  fatherOfConfession?: Priest;
  servantFollowing?: Servant;
  clientCategoryID?: number;
  chomosya?: boolean;
  MobilePhone?: string;
  HomePhone?: string;
  birthDate?: Date;
  fatherPhone?: string;
  motherPhone?: string;
  Class?: Classes;
  Zone?: Zone;
  SchoolID?: number;
  Address: Address;

  constructor(ClientOptions: any) {
    this.Name = ClientOptions.ClientName;
    this.Info = ClientOptions.ClientInfo;
    this.GraduationYearID = ClientOptions.ClientGraduationYearID;
    this.Email = ClientOptions.ClientEmail;
    this.LocationX = ClientOptions.ClientLocationX;
    this.LocationY = ClientOptions.ClientLocationY;
    this.Note = ClientOptions.ClientNote;
    this.fatherOfConfession = new Priest(
      ClientOptions.ClientsFatherOfConfession,
      ClientOptions.PriestName,
      ClientOptions.PriestChurch
    );
    this.servantFollowing = new Servant(
      ClientOptions.ClientServantFollowing,
      ClientOptions.ServantName,
      ClientOptions.ServantEmail,
      ClientOptions.ServantEmail
    );
    this.clientCategoryID = ClientOptions.clientCategoryID;
    this.chomosya = ClientOptions.ClientChomosya;
    this.MobilePhone = String(ClientOptions.ClientMobilePhone);
    this.HomePhone = String(ClientOptions.ClientHomePhone);
    this.birthDate = new Date(ClientOptions.ClientbirthDate);
    this.fatherPhone = ClientOptions.ClientFatherPhone;
    this.motherPhone = ClientOptions.ClientMotherPhone;
    this.Class = new Classes(ClientOptions.ClientClass, ClientOptions.ClassName) ;
    this.Zone = new Zone(ClientOptions.ClientZone, ClientOptions.type);
    this.SchoolID = ClientOptions.ClientSchoolID;
    this.Address = new Address(
      ClientOptions.ClientstreetName,
      ClientOptions.ClientFloorNumber,
      ClientOptions.ClientBuildingNumber,
      ClientOptions.ClientFlatNumber,
      ClientOptions.ClientStreetDetails
    );
  }
}
