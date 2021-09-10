import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  uid:string = "";


  constructor(public authFire:AngularFireAuth, public router:Router, public http:HttpClient ) { 
    authFire.onAuthStateChanged((user) => {
      if (user){
        if (user.email == "cas.techno2020@gmail.com"){
          router.navigate(["/dashboard"])
        }   
        this.uid = user.uid;
        http.get("https://controlclients-5d2b0-default-rtdb.firebaseio.com/users/"+this.uid+"/form2.json").subscribe((data) => {

        })
      }else {
        this.router.navigate(['/login']);
      }
    })
  }


  signOut() {
    this.authFire.signOut();
    this.router.navigate(['/login']);
  }
}
