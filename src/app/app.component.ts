import { Component } from '@angular/core';
import { CentralService } from './central.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private centralService: CentralService) { }

  checkLog() {
    return this.centralService.checkLog();
  }

}
