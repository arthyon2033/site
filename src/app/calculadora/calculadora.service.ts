import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }

  display = "";
  num = [];
  op = [];
  resultado = 0;
  podeDigitar = true;
  
  append(element){
    this.display += element;
    // console.log(this.display);
    if(element == "*" || element == "/" || element == "+" || element == "-" || element == "="){
      this.num.push(Number(this.display.substring(0 , this.display.length - 1)));
      this.op.push(element);
      this.display = "";
      // console.log(this.num);
      // console.log(this.display);
      // console.log(this.op);
    }
  }

  mostraResultado(){
    this.resultado = this.num[0];
    for(let i = 0; i < this.op.length - 1; i++){
      if(this.op[i] == "+"){
        this.resultado = this.resultado + this.num[i+1];
      }if(this.op[i] == "-"){
        this.resultado = this.resultado -  this.num[i+1];
      }if(this.op[i] == "*"){
        this.resultado = this.resultado * this.num[i+1];
      }if(this.op[i] == "/"){
        this.resultado = this.resultado / this.num[i+1];
      }
    }
    this.display = this.resultado.toString();
    return this.display;
  }

  deletaTela() {
    this.display = "";
    this.podeDigitar = true;
    this.resultado = 0;
    this.num = [];
    this.op = [];
    return this.display;
  }

}
