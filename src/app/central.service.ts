import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LogIn } from './home/login.model';

@Injectable({
  providedIn: 'root'
})
export class CentralService {

  constructor(private route: Router) { }

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

  verificaUser(logar): void {
    if(logar.user == 'admin' && logar.password == 'admin'){
      this.isLogged = true;
      alert("Logado com sucesso!");
    } else {
      alert("Usuario ou senha incorreta");
    }
  }

  userAuth() {
    return this.isLogged;
  }

}
