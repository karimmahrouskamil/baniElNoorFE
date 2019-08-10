import { Category } from "../Categories/categories";

export class ClientCategory {
  ID?: string;
  CategoryID?: number;
  ClientID?: number;
  category?: Category;
  constructor(
    ID: string,
    CategoryID: number,
    ClientID: number,
    CategoryName: string,
    CategoryComment: string
  ) {
    this.ID = ID;
    this.CategoryID = CategoryID;
    this.ClientID = ClientID;
    this.category = new Category(ID, CategoryName, CategoryComment);
  }
}
