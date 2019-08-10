import { Component, OnInit } from "@angular/core";
import { ClientsService } from "../../Services/Clients/clients.service";
import { Client } from "../../Data-Model/Clients/client";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.page.html",
  styleUrls: ["./clients.page.scss"]
})
export class ClientsPage implements OnInit {
  panelOpenState = false;
  CLients: Client[];
  constructor(private clientService: ClientsService) {}

  ngOnInit() {
    this.clientService.getAll().subscribe(data => {
      this.CLients = data.map(client => new Client(client));
      console.log(this.CLients);
    });
  }
}
