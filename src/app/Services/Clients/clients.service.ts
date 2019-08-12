import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SERVER } from "src/environments/environment";
import { map, catchError } from "rxjs/operators";
import { Client } from "src/app/Data-Model/Clients/client";

@Injectable({
  providedIn: "root"
})
export class ClientsService {
  Client: Client;

  constructor(private http: HttpClient) {}
  getAll(): Observable<any> {
    return this.http.get(SERVER.DomainURL + "/client/Clients").pipe(
      map((data: any[]) => (data = data)),
      catchError(err => {
        return this.handleServerError(err);
      })
    );
  }
  setClient(client: Client) {
    this.Client = client;
  }
  getClient() {
    return this.Client;
  }
  handleServerError(error: any) {
    // console.log(error.error || error.json() || error);
    return Observable.throw("Server error in question service", error);
  }
}
