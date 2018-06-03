import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from './calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor(public calcServ: CalculadoraService) { }

  ngOnInit() {
  }

  display = this.calcServ.display;

  append(element: string){
    this.calcServ.append(element);
  }

  mostraResultado(){
    this.calcServ.mostraResultado();
  }

  deletaTela(){
    this.calcServ.deletaTela();
  }

}
