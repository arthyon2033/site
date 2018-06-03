import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CientificaComponent } from './calculadora/cientifica/cientifica.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuard } from './guards/auth.guard';

export const ROUTES: Routes = [
    { path: "", component: HomeComponent },
    { path: "about", component: AboutComponent, canActivate: [AuthGuard] },
    { path: "formulario", component: FormularioComponent, canActivate: [AuthGuard] },
    { path: "calculadora", component: CalculadoraComponent, canActivate: [AuthGuard] },
    { path: "cientifica", component: CientificaComponent, canActivate: [AuthGuard] },
    { path: '**', component: NotFoundComponent }
]