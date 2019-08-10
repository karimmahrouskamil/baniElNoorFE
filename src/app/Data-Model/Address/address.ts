export class Address {
  streetName?: string;
  FloorNum?: string;
  buildingNumber?: string;
  flatNumber?: string;
  streetDetails?: string;

  constructor(
    streetName,
    floorNumber,
    buildingNumber,
    flatNumber,
    streetDetails
  ) {
    this.streetName = streetName;
    this.FloorNum = String(floorNumber);
    this.buildingNumber = String(buildingNumber);
    this.flatNumber = String(flatNumber);
    this.streetDetails = streetDetails;
  }
}
