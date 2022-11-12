import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpireComponent } from './components/empire/empire.component';

const routes: Routes = [
    { path: '', component: EmpireComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class EmpireRoutingModule { }