import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup | any;
  signupForm!: FormGroup | any;
  showSignupForm: boolean = false;

  constructor(private formBuilder: FormBuilder,private auth:AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Convenience getters for easy access to form controls
  get fLogin() { return this.loginForm.controls; }
  get fSignup() { return this.signupForm.controls; }

  toggleSignupForm() {
    this.showSignupForm = !this.showSignupForm;
  }

  onSubmitLogin() {
    
    if (this.loginForm.invalid) {
      return;
    }
    this.auth.getUserDetails(this.loginForm.value);
    console.log('Login form submitted:', this.loginForm.value);
  }

  onSubmitSignup() {
    if (this.signupForm.invalid) {
      return;
    }
    console.log('Signup form submitted:', this.signupForm.value);
  }
}
