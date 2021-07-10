import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {


  public pass:string = "";
  public email:string = "";

  formsLogin:FormGroup;

  constructor( private authC:AngularFireAuth, private createForm:FormBuilder) { }

  ngOnInit(): void {
    this.formsLogin = this.createForm.group({
      email: ['', Validators.compose([ Validators.required, Validators.email ])],
      pass: ['',Validators.compose([ Validators.required, Validators.minLength(8) ])]
    });
  }
    
  login(){
    this.authC.signInWithPopup( new firebase.auth.GoogleAuthProvider() );
    console.log(this.authC.user);
  }
  
    
  singinWithEmail(){
    this.authC.signInWithEmailAndPassword(this.email, this.pass);
    }
    

}
