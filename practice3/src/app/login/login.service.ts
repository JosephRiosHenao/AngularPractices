import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from "firebase";


@Injectable()
export class LoginService{

    token:string = ""

    constructor(private router:Router){}

    login(email:string, pass:string){
        firebase.auth().signInWithEmailAndPassword(email,pass).
            then(
                response => {
                    firebase.auth().currentUser!.getIdToken().
                    then(
                        token => {
                            this.token = token;
                            this.router.navigate(['']);
                        }
                    )
                }
            )
    }


    getIdToken(){
        return this.token;
    }

    isAuth(){
        return this.token != "";
    }

    logout(){
        firebase.auth().signOut().then(()=>{
            this.token = "";
            this.router.navigate(['login']);
        }).catch(error => console.log("Error de LogOut: "+error))
    }
}