import { Component } from '@angular/core';
import { TestService } from 'src/app/Services/test/test.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private testService: TestService) {
    this.testService.getAll().subscribe(data => {
      console.log(data);
      
    })
  }
  ngOnInit() {

  }
}
