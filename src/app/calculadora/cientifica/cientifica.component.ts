import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { CalculadoraService } from '../calculadora.service';

@Component({
  selector: 'app-cientifica',
  templateUrl: './cientifica.component.html',
  styleUrls: ['./cientifica.component.css']
})
export class CientificaComponent implements AfterViewInit {

  @ViewChild('canvasEl') canvasEl: ElementRef;
  public context: CanvasRenderingContext2D;

  constructor(public calcServ: CalculadoraService) { }

  ngAfterViewInit() {
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');

    this.draw();
  }

  append(element: string) {
    this.calcServ.append(element);
  }

  mostraResultado() {
    this.calcServ.mostraResultado();
  }

  deletaTela() {
    this.calcServ.deletaTela();
  }

  display = this.calcServ.display;
  podeDigitar = this.calcServ.podeDigitar;

  draw() {
    let res = this.calcServ.display.split("");
    let op = "";

    for (let i = 0; i < res.length; i++) {// pega o operador matemático

      if (res[i] == "*" || res[i] == "/" || res[i] == "+" || res[i] == "-") {
        op = res[i];
      }
    }

    for (let i = 0; i < res.length; i++) {// retira o operador matemático
      if (res[i] == "*" || res[i] == "/" || res[i] == "+" || res[i] == "-" || res[i] == "x") {
        res[i] = " ";
      }
    }

    let acc = "";
    for (let i = 0; i < res.length; i++) {// transforma o vetor "res" em string 
      acc += res[i];
    }

    let part = acc.split("  ");// retira e transforma a string em numeros
    console.log(part);

    let cAng = Number(part[0]);
    let cLin = Number(part[1]);

    this.context.beginPath();// eixo y
    this.context.moveTo(200, 0);
    this.context.lineTo(200, 200);
    this.context.stroke();

    //this.context.beginPath();// reta parametro
    //this.context.moveTo(168, 0);
    //this.context.lineTo(168, 200);
    //this.context.stroke();

    for (let i = 0; i < 200; i = i + 10) {// escala do eixo y
      this.context.beginPath();
      this.context.moveTo(197, i);
      this.context.lineTo(203, i);
      this.context.stroke();
    }

    for (let i = 0; i < 400; i = i + 10) {// escala do eixo x
      this.context.beginPath();
      this.context.moveTo(i, 97);
      this.context.lineTo(i, 103);
      this.context.stroke();
    }

    this.context.beginPath();// eixo x
    this.context.moveTo(0, 100);
    this.context.lineTo(400, 100);
    this.context.stroke();

    for (let x = 0; x < 400; x++) {
      let x1 = (x - 200);
      let y1 = ((((-1) * x1) * (cAng * 10)) + (cLin * 100)) / 10;
      if (y1 > -100 && y1 < 100) {
        this.context.beginPath()
        this.context.moveTo(200 - x1, 100 - y1);
        this.context.lineTo(200 - x1 + 1, 100 - y1 + 1);
        this.context.stroke();
      }
    }

  }

}
