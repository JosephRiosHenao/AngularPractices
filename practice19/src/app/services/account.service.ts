import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(public  authFire: AngularFireAuth, public  router:Router ) { 
    authFire.onAuthStateChanged((user) => {
      if (user){
        if (user.email == "admin@cas-technology.com"){
          router.navigate(["/dashboard"])
        }   
        if (router.url == "/login") {
          router.navigate(["/forms"])
        }   
        if (router.url == "/") {
          router.navigate(["/forms"])
        }
      
    }
    })
  }

  login(email:string, pass:string){
    this.authFire.signInWithEmailAndPassword(email,pass).then( user => {
      if (user){
        if (user.user?.email == "admin@cas-technology.com"){
          this.router.navigate(["/dashboard"])
        }   
        if (this.router.url == "/login") {
          this.router.navigate(["/forms"])
        }   
      }
    })
  }

  register(email:string, pass:string){
    this.authFire.createUserWithEmailAndPassword(email,pass).then( user => {
      if (user){
        if (user.user?.email == "admin@cas-technology.com"){
          this.router.navigate(["/dashboard"])
        }   
        if (this.router.url == "/login") {
          this.router.navigate(["/forms"])
        }   
      }
    })
  }



}
