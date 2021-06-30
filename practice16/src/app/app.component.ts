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
  public pass:string = "";
  public email:string = "";


  actionCodeSettings = {
    // The URL to redirect to for sign-in completion. This is also the deep
    // link for mobile redirects. The domain (www.example.com) for this URL
    // must be whitelisted in the Firebase Console.
    url: 'https://www.example.com/finishSignUp?cartId=1234',
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    // This must be true.
    handleCodeInApp: true
  };

  constructor( public authC:AngularFireAuth ){
    this.authC.user.subscribe((user) =>{
      console.log(user);
      this.avatar = user?.photoURL;
      if (!user?.emailVerified){ user?.sendEmailVerification(); }
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
  
  singinWithEmail(){
    this.authC.createUserWithEmailAndPassword(this.email, this.pass).then(
      () => {
        
      }
      )
    }
    
    fileChangeEvent(e:Event){

      let user = firebase.auth().currentUser;

      let file = (e.target as HTMLInputElement).files[0];
      console.log(file)
      let storage = firebase.storage();
      if (!file){
        console.error("No se ha subido ningun archivo")
      }else{
        let storageRef = storage.ref("/userProfileImg/"+file.name);

        let uploadTask = storageRef.put(file);
        uploadTask.on("state_changed", 
        function(snapshot){}, 
        function(error){console.error(error);}, 
        function(){
          console.log("Archivo subido")
          storageRef.getDownloadURL().then((url) => {
              user.updateProfile({
                photoURL: url,
              }).then(()=> this.avatar = url );
            }
          );
        });
        
      }
    }

}
