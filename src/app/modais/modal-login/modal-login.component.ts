import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CentralService } from '../../central.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

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
    return this.centralService.verificaUser(logar);
  }

}
