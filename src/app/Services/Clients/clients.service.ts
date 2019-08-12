import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SERVER } from "src/environments/environment";
import { map, catchError } from "rxjs/operators";
import { Client } from "src/app/Data-Model/Clients/client";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ClientsService implements Resolve<any> {
 
  Client: Client;
  Clients: Client[];
  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot) {
    let id = route.paramMap.get("id");
    return this.getClient(id);
  }
  
  getAll(): Observable<any> {
    return this.http.get(SERVER.DomainURL + "/client/Clients").pipe(
      map((data: any[]) => (data = data)),
      catchError(err => {
        return this.handleServerError(err);
      })
    );
  }
  setClient(clients: Client[]) {
    this.Clients = clients;
  }
  getClient(id) {
    return this.Clients[id];
  }
  handleServerError(error: any) {
    // console.log(error.error || error.json() || error);
    return Observable.throw("Server error in question service", error);
  }
}
