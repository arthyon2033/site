import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CientificaComponent } from './calculadora/cientifica/cientifica.component';

export const ROUTES: Routes = [
    { path: "", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "formulario", component: FormularioComponent },
    { path: "calculadora", component: CalculadoraComponent },
    { path: "cientifica", component: CientificaComponent }
]