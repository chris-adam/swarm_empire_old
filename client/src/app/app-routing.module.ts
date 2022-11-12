import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './landing-page/components/home-page/home-page.component';
import { signUpComponent } from './landing-page/components/sign-up/sign-up.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
    { path: 'empire', loadChildren: () => import('./empire/empire.module').then(m => m.EmpireModule) },
    {
        path: '', component: LandingPageComponent, children: [
            { path: 'signup', component: signUpComponent },
            { path: '', component: HomePageComponent },
        ]
    },
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