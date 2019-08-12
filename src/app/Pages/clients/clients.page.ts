import { Component, OnInit } from "@angular/core";
import { ClientsService } from "../../Services/Clients/clients.service";
import { Client } from "../../Data-Model/Clients/client";
import { Router, NavigationExtras } from "@angular/router";
import { DataService } from "../../Services/DataService/data.service";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.page.html",
  styleUrls: ["./clients.page.scss"]
})
export class ClientsPage implements OnInit {
  CLients: Client[];
  constructor(
    private clientService: ClientsService,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.clientService.getAll().subscribe(data => {
      this.CLients = data.map(client => new Client(client));
      console.log(this.CLients);
    });
  }
  navigateToClientDetails(index , client: Client) {
    // let navigationExtras: NavigationExtras = {
    //   state: {
    //     id: client.ID
    //   }
    // };
    // this.dataService.setData(this.CLients);
    this.clientService.setClient(this.CLients)
    this.router.navigateByUrl("/client-details/" + index);
  }
}
