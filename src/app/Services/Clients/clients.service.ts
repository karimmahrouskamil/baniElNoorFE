import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(SERVER.DomainURL+'/client/Clients').pipe(
      map(
        (data: any[]) =>
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
