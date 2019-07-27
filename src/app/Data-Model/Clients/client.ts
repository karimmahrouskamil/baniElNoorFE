export class Client {
  Name: string;
  Info: string;
  GraduationYearID: number;
  // AddressID: Address;
  Email: string;
  LocationX: number;
  LocationY: number;
  Note: string;
  fatherOfConfession: number;
  servantFollowing: number;
  clientCategoryID: number;
  chomosya: boolean;
  MobilePhone: string;
  HomePhone: string;
  birthDate: Date;
  fatherPhone: string;
  motherPhone: string;
  Class: number;
  Zone: number;
  streetName: string;
  floorNumber: string;
  buildingNumber: string;
  flatNumber: string;
  streetDetails: string;
  
  constructor(ClientOptions: any) {
    this.Name = ClientOptions.name;
    this.Info = ClientOptions.notes;
    this.GraduationYearID = 0;
    this.streetName = ClientOptions.streetName;
    this.floorNumber = String(ClientOptions.floorNumber);
    this.buildingNumber = String(ClientOptions.buildingNumber);
    this.flatNumber = String(ClientOptions.flatNumber);
    this.streetDetails = ClientOptions.streetDetails;
    this.Email = ClientOptions.email;
    this.LocationX = 0;
    this.LocationY = 0;
    this.Note = ClientOptions.notes;
    this.fatherOfConfession = ClientOptions.fatherOfConfession;
    this.servantFollowing = ClientOptions.servantFollowing;
    this.clientCategoryID = 1;
    this.chomosya = true;
    this.MobilePhone = String(ClientOptions.MobilePhone);
    this.HomePhone = String(ClientOptions.HomePhone);
    this.birthDate = new Date();
    this.fatherPhone = ClientOptions.fatherPhone;
    this.motherPhone = ClientOptions.motherPhone;
    this.Class = ClientOptions.class;
    this.Zone = ClientOptions.zone;
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
