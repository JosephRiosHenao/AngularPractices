import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,
              private router:Router) { }

  ngOnInit(): void {
  }

  login(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.loginService.login(email,password);
  }
  
  register(){
    this.router.navigate(['register']);
  }
}
