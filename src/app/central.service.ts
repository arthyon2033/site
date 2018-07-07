import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { LogIn } from './home/login.model';

@Injectable({
  providedIn: 'root'
})
export class CentralService {

  constructor(
    private route: Router
  ) { }

  isLogged: boolean = false;

  logs: LogIn[] = [
    {user: 'admin', password: 'admin'}
  ];

  checkLog() {
    console.log(this.isLogged);
    if (this.isLogged != true) {
      alert("Você não está logado!");
      this.route.navigate(['/']);
    }
  }

  verificaUser(logar): boolean {
    if(logar.user == 'admin' && logar.password == 'admin'){
      alert("Logado com sucesso!");
      this.isLogged = true;
      return this.isLogged;
    } else {
      alert("Usuario ou senha incorreta");
      this.isLogged = false;
      return this.isLogged;
    }
  }

  userAuth() {
    return this.isLogged;
  }

}
