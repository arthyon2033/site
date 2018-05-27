import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { CientificaComponent } from "./cientifica.component";

const appRoutes: Routes = [
    { path: "cientifica", component: CientificaComponent }
];

@NgModule({
    imports:[
        RouterModule.forChild(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class CalcRouting { }