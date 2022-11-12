import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpireComponent } from './components/empire/empire.component';
import { EmpireRoutingModule } from './empire-routing.module';

@NgModule({
  declarations: [
    EmpireComponent
  ],
  imports: [
    CommonModule,
    EmpireRoutingModule
  ]
})
export class EmpireModule { }
