import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Client } from "src/app/Data-Model/Clients/client";

@Component({
  selector: "app-client-details",
  templateUrl: "./client-details.page.html",
  styleUrls: ["./client-details.page.scss"]
})
export class ClientDetailsPage implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  CLient: Client;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      // if (this.router.getCurrentNavigation().extras.state.client) {
        this.CLient = window.history.state.client;
     

      // }
    });
  }
}
