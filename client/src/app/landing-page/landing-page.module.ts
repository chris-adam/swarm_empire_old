import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { signUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    signUpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingPageModule { }
