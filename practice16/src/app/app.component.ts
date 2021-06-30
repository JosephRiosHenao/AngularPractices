import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  avatar:any = "";

  constructor( public authC:AngularFireAuth ){
    this.authC.user.subscribe((user) =>{
      console.log(user);
      this.avatar = user?.photoURL;
      user?.sendEmailVerification();
      console.log(user?.emailVerified)

    })
  }

  login(){
    this.authC.signInWithPopup( new firebase.auth.GoogleAuthProvider() );
    console.log(this.authC.user);
  }

  logout(){
    this.authC.signOut();
  }

}
