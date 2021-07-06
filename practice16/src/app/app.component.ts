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

  public user: firebase.User;

  public name:string = "";
  public loading:boolean = true;



  constructor( public authC:AngularFireAuth ){
    this.authC.user.subscribe((user) =>{
      this.user = user;
      this.avatar = user?.photoURL;
      if (!user?.emailVerified){ user?.sendEmailVerification(); }
      this.loading = false;
    })
  }

  logout(){
    this.authC.signOut();
  }

    fileChangeEvent(e:Event){

      let user = firebase.auth().currentUser;
      let newURL:string = "";

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
              });
              newURL = url;
              console.log("Perfil actualizado!")
              this.avatar = newURL;
            }
            );
          });
        }
        setTimeout(()=>{
          console.log("Actualizacion de vista");
          this.updateProfile();
        },5000);
    }


  updateProfile(){
    var user = firebase.auth().currentUser;
    if (user != null){
      this.avatar = user.photoURL;
      user.updateProfile(
        {
          displayName: this.name,
        }
      );
    }
  }

  
  setAvatar(img:string){
    this.avatar = img;
  }
}
