import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  signInForm!: FormGroup;

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });
  }

  onSignIn(): void {
    this.authService.login();
    this.router.navigateByUrl("/empire");
  }

}
