import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildComponent } from './components/build/build.component';
import { EmpireHomeComponent } from './components/empire-home/empire-home.component';
import { QuestsComponent } from './components/quests/quests.component';
import { ResearchComponent } from './components/research/research.component';
import { UnitsComponent } from './components/units/units.component';
import { EmpireComponent } from './empire.component';

const routes: Routes = [
    {
        path: '', component: EmpireComponent,
        children: [
            { path: '', component: EmpireHomeComponent },
            { path: 'units', component: UnitsComponent },
            { path: 'build', component: BuildComponent },
            { path: 'research', component: ResearchComponent },
            { path: 'quests', component: QuestsComponent },
        ]
    },
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