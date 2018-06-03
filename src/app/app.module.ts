import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { ROUTES } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CientificaComponent } from './calculadora/cientifica/cientifica.component';
import { ModalAlertComponent } from './modais/modal-alert/modal-alert.component';
import { ModalLoginComponent } from './modais/modal-login/modal-login.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { CentralService } from './central.service';
import { AuthGuard } from './guards/auth.guard';
import { CalculadoraService } from './calculadora/calculadora.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FormularioComponent,
    CalculadoraComponent,
    CientificaComponent,
    ModalAlertComponent,
    ModalLoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, CentralService, AuthGuard, CalculadoraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
