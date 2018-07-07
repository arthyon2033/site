import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective, TabsetComponent } from 'ngx-bootstrap';

import { CentralService } from '../../central.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css'],
  exportAs:'child'
})
export class ModalLoginComponent implements OnInit {

  @ViewChild('modalLogin') public modalLogin: ModalDirective;
  @ViewChild('tabSetModal') tabSetModal: TabsetComponent;

  logar: FormGroup;

  constructor(private fb: FormBuilder, private centralService: CentralService) {
    this.logar = this.fb.group({
      user: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required)
    })
  }

  ngOnInit() {
  }

  verificaUser(logar) {
    let user = this.centralService.verificaUser(logar);
    if(user == true){
      this.fechaLogin();
    }
  }

  mostraLogin(): void {
    this.modalLogin.show();
  }

  fechaLogin(): void {
    this.modalLogin.hide();
  }

}
