import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { LoginService } from './login/login.service';
// import { Persona } from './persona.model';
// import { PersonasService } from './personas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = 'Listado de Personas';

  // public personas:Persona[] = [];

  // constructor(private personasService:PersonasService){}
  // ngOnInit(): void {
  //   this.personas = this.personasService.personas;
  // }
    constructor(private loginService:LoginService){}
    ngOnInit(){
      const firebaseConfig = {
        apiKey: "AIzaSyCCLnTnrYEPz9tSFBF9c0RrkVo6gtuAgPQ",
        authDomain: "list-persons-angular.firebaseapp.com",
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    }
    
    
    isAuth(){
      return this.loginService.isAuth();
    }


    logout(){
      this.loginService.logout();
    }
  // addPersona(persona:Persona){
  //   // this.personas.push(persona);
  //   this.personasService.addPersona(persona);
  // }
  // deletePersona(index:number){
  //   // this.personas.splice(index,1);
  //   this.personasService.deletePersona(index);
  // }
}
