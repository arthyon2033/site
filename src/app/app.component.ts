import { Component } from '@angular/core';
import { CentralService } from './central.service';
import { ModalLoginComponent } from './modais/modal-login/modal-login.component';

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

  mostrarLogin(login: ModalLoginComponent): void {
    login.modalLogin.show();
  }

}
