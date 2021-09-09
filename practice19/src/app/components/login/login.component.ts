import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  registerForm: FormGroup;

  loginFormState:boolean = true;
  
  constructor(private accountService:AccountService) { 
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.required)
    })
    this.registerForm = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    })
  }

  login() {
    this.accountService.login(this.loginForm.value.email, this.loginForm.value.password)
  }

  register() {
    if (this.registerForm.value.password === this.registerForm.value.confirmPassword) {
      this.accountService.register(this.registerForm.value.email, this.registerForm.value.password)
    }
  }

}
