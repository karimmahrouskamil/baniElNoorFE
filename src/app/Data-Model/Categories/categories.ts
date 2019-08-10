export class Category {
  ID?: string;
  CategoryName?: string;
  CategoryComment?: string;
  constructor(ID: string, CategoryName: string, CategoryComment: string) {
    this.ID = ID;
    this.CategoryName = CategoryName;
    this.CategoryComment = CategoryComment;
  }
}
