import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CustomValidators } from 'src/app/utils/custom-validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class signUpComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  signUpForm!: FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      emailAddress: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, [Validators.required, Validators.minLength(3)]),  // TODO: check if username already exists
      passwords: new FormGroup({
        password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      }, [CustomValidators.MatchValidator('password', 'confirmPassword')])
    });
  }

  onSignUp(): void {
    console.log(this.signUpForm.value);
    this.authService.login();
    this.router.navigateByUrl("/empire");
  }
}