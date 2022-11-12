import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';
import { signUpComponent } from './landing-page/components/sign-up/sign-up.component';

const routes: Routes = [
    { path: 'empire', loadChildren: () => import('./empire/empire.module').then(m => m.EmpireModule) },
    { path: 'signup', component: signUpComponent },
    { path: '', component: LandingPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }