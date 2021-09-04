import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  user!: firebase.User;

  // user:

  constructor(private authFire:AngularFireAuth, public router:Router ) { 
    authFire.onAuthStateChanged( user => {
      if(user) {
        this.user = user;
        console.log(user);
        if (router.url == "/login"){
          router.navigate(["/"])
        }
      }else {
        router.navigate(["/login"])
      }
    })
  }


  login(email:string, pass:string){
    console.log("login with: "+email+" "+pass)
    this.authFire.signInWithEmailAndPassword(email,pass).then( user => {
      if(user){
        this.user = user.user!;
        this.router.navigate(["/"])
      }
    })
  }
}
