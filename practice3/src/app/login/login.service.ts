import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from "firebase";


@Injectable()
export class LoginService{

    public token:string = "";
    public UID:string|undefined  = "";

    constructor(private router:Router){}

    login(email:string, pass:string){
        firebase.auth().signInWithEmailAndPassword(email,pass).
            then(
                response => {
                    firebase.auth().currentUser!.getIdToken().
                    then(
                        token => {
                            this.token = token;
                            this.UID = firebase.auth().currentUser?.uid;
                            this.router.navigate(['']);
                        }
                    )
                }
            )
    }




    getIdToken(){
        return this.token;
    }

    getUID(){
        return this.UID;
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

    singIn(email:string, pass:string){
        firebase.auth().createUserWithEmailAndPassword(email,pass).then(
            response => console.log("respuesta exitosa: "+response)
        ).catch(
            error => console.log("respuesta incorrecta: "+error)
        )
    }
}