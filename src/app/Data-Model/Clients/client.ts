export class Client {
  Name?: string;
  Info?: string;
  GraduationYearID?: number;
  // AddressID: Address;
  Email?: string;
  LocationX?: number;
  LocationY?: number;
  Note?: string;
  fatherOfConfession?: number;
  servantFollowing?: number;
  clientCategoryID?: number;
  chomosya?: boolean;
  MobilePhone?: string;
  HomePhone?: string;
  birthDate?: Date;
  fatherPhone?: string;
  motherPhone?: string;
  Class?: number;
  Zone?: number;
  streetName?: string;
  floorNumber?: string;
  buildingNumber?: string;
  flatNumber?: string;
  streetDetails?: string;
  SchoolID?: number;
  constructor(ClientOptions: any) {
    this.Name = ClientOptions.ClientName;
    this.Info = ClientOptions.ClientInfo;
    this.GraduationYearID = ClientOptions.ClientGraduationYearID;
    this.streetName = ClientOptions.ClientstreetName;
    this.floorNumber = String(ClientOptions.ClientFloorNumber);
    this.buildingNumber = String(ClientOptions.ClientBuildingNumber);
    this.flatNumber = String(ClientOptions.ClientFlatNumber);
    this.streetDetails = ClientOptions.ClientStreetDetails;
    this.Email = ClientOptions.ClientEmail;
    this.LocationX = ClientOptions.ClientLocationX;
    this.LocationY = ClientOptions.ClientLocationY;
    this.Note = ClientOptions.ClientNote;
    this.fatherOfConfession = ClientOptions.ClientsFatherOfConfession;
    this.servantFollowing = ClientOptions.ClientServantFollowing;
    this.clientCategoryID = ClientOptions.clientCategoryID;
    this.chomosya = ClientOptions.ClientChomosya;
    this.MobilePhone = String(ClientOptions.ClientMobilePhone);
    this.HomePhone = String(ClientOptions.ClientHomePhone);
    this.birthDate = new Date(ClientOptions.ClientbirthDate);
    this.fatherPhone = ClientOptions.ClientFatherPhone;
    this.motherPhone = ClientOptions.ClientMotherPhone;
    this.Class = ClientOptions.ClientClass;
    this.Zone = ClientOptions.ClientZone;
    this.SchoolID = ClientOptions.ClientSchoolID;
  }
}
export class Address {
  Street: string;
  FloorNum: string;
  BuildingNum: string;
  AppartmentNum: string;
  streetDetails: string;

  constructor(
    streetName,
    floorNumber,
    buildingNumber,
    flatNumber,
    streetDetails
  ) {
    this.Street = streetName;
    this.FloorNum = floorNumber;
    this.BuildingNum = buildingNumber;
    this.AppartmentNum = flatNumber;
    this.streetDetails = streetDetails;
  }
}
