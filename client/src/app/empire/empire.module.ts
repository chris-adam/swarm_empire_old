import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpireHomeComponent } from './components/empire-home/empire-home.component';
import { EmpireRoutingModule } from './empire-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { UnitsComponent } from './components/units/units.component';
import { EmpireComponent } from './empire.component';
import { BuildComponent } from './components/build/build.component';
import { ResearchComponent } from './components/research/research.component';
import { QuestsComponent } from './components/quests/quests.component';

@NgModule({
  declarations: [
    EmpireComponent,
    EmpireHomeComponent,
    NavbarComponent,
    UnitsComponent,
    BuildComponent,
    ResearchComponent,
    QuestsComponent
  ],
  imports: [
    CommonModule,
    EmpireRoutingModule,
    MdbCollapseModule,
    MdbDropdownModule
  ],
  bootstrap: [
    EmpireComponent
  ]
})
export class EmpireModule { }
