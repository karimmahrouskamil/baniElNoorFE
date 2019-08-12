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
    if (this.route.snapshot.data["special"]) {
      this.CLient = this.route.snapshot.data["special"];
      console.log(this.CLient);
    }
    // this.route.queryParams.subscribe(params => {
    //     this.CLient = window.history.state.client;

    // });
  }
}
