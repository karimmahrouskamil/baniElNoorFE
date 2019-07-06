import { Observable } from "rxjs";
export  class AbstractCRUD<T> implements AbstractCRUDInterface<T> {
    getOne(id: T|any): Observable<T|any> {
        throw new Error("Method not implemented.");
    }   
     getAll(): Observable<T[]|any> {
        throw new Error("Method not implemented.");
    }
    addOne(item: T|any): Observable<T|any> {
        throw new Error("Method not implemented.");
    }
    addList(item: T[]|any): Observable<T[]|any> {
        throw new Error("Method not implemented.");
    }
    updateOne(id: T|string|any): Observable<T|any> {
        throw new Error("Method not implemented.");
    }
    updateAll(item: T[]|any): Observable<T|any> {
        throw new Error("Method not implemented.");
    }
    deleteOne(item: T|any): Observable<T|any> {
        throw new Error("Method not implemented.");
    }
    deleteList(item: T[]|any): Observable<T|any> {
        throw new Error("Method not implemented.");
    }


}
interface AbstractCRUDInterface<T> {
  getOne(id: T|any): Observable<T|any>;
  getAll(): Observable<T[]|any>;
  addOne(item: T|any): Observable<T|any>;
  addList(item: T[]|any): Observable<T[]|any>;
  updateOne(id: T|string|any): Observable<T|any>;
  updateAll(item: T[]|any): Observable<T|any>;
  deleteOne(id: T|any): Observable<T|any>;
  deleteList(item: T[]|any): Observable<T|any>;
}
