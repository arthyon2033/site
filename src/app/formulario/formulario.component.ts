import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Formulario } from './formulario.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  estados: string[] = [
    "Acre",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espirito Santo",
    "Maranhão",
    "Minas Gerais",
    "Pernambuco",
    "Parana",
    "Rondonia",
    "Rio Grande do Sul",
    "São Paulo",
    "Santa Catarina"
  ]

  usuarios: Formulario[] = [];

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nome: this.fb.control('', Validators.required),
      sobrenome: this.fb.control(''),
      email: this.fb.control(''),
      password: this.fb.control(''),
      endereco: this.fb.control(''),
      num: this.fb.control(''),
      cidade: this.fb.control(''),
      estado: this.fb.control(''),
      cep: this.fb.control(''),
      check: this.fb.control('', Validators.required),
    })
  }

  ngOnInit() {
  }

  cadastrar(form){
    this.usuarios.push(
      {nome: form.nome, sobrenome: form.sobrenome, email: form.email, password: form.password, endereco: form.endereco, num: form.num, cidade: form.cidade, estado: form.estado, cep: form.cep, check: form.check}
    )
  }

}
