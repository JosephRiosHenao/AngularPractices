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

  constructor( private authC:AngularFireAuth) { }

  ngOnInit(): void {
  }
    
  login(){
    this.authC.signInWithPopup( new firebase.auth.GoogleAuthProvider() );
    console.log(this.authC.user);
  }
  
    
  singinWithEmail(){
    this.authC.signInWithEmailAndPassword(this.email, this.pass);
    }
    

}
