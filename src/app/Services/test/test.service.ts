import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { SERVER } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class TestService {
  constructor(private http: HttpClient) {}
  
  getAll(): Observable<any> {
    return this.http.get(SERVER.DomainURL+'/test').pipe(
      map(
        (data: any[]) =>
          (data = data)
      ),
      catchError(err => {
        return this.handleServerError(err);
      })
    );
  }
  addAllClients(AllClients:any): Observable<any> {
    return this.http.post(SERVER.DomainURL+'/client/postTest', AllClients).pipe(
      map(
        (data: any) =>
          (data = data)
      ),
      catchError(err => {
        return this.handleServerError(err);
      })
    );
  }
  
  handleServerError(error: any) {
    // console.log(error.error || error.json() || error);
    return Observable.throw("Server error in question service", error);
  }
}
