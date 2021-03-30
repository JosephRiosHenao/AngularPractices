import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Listado de Personas';
  public personas:Persona[] = [
    new Persona('Juan','Perez'), 
    new Persona('Laura','Juarez'),
    new Persona('Karla','Lara')
  ];

  public nameInput:string = "";
  public lastNameInput:string = "";

  addPersona(){
    let personaAñadida = new Persona(this.nameInput,this.lastNameInput);
    this.personas.push( personaAñadida );
  }

  deletePersona(index:number){
    this.personas.splice(index,1);
  }
}
