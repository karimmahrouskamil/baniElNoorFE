import { Component, OnInit } from "@angular/core";
import { ClientsService } from "../../Services/Clients/clients.service";
import { Client } from "../../Data-Model/Clients/client";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.page.html",
  styleUrls: ["./clients.page.scss"]
})
export class ClientsPage implements OnInit {
  CLients: Client[];
  constructor(private clientService: ClientsService, private router: Router) {}

  ngOnInit() {
    this.clientService.getAll().subscribe(data => {
      this.CLients = data.map(client => new Client(client));
      console.log(this.CLients);
    });
  }
  navigateToClientDetails(index, client: Client) {
    // let navigationExtras: NavigationExtras = {
    //   state: {
    //     id: client.ID
    //   }
    // };
    // this.dataService.setData(this.CLients);
    this.clientService.setClient(this.CLients);
    this.router.navigateByUrl("/client-details/" + index);
  }
}
