import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();
  
  public nameInput:string = "";
  public lastNameInput:string = "";

  addPersona(){
    let personaAñadida = new Persona(this.nameInput,this.lastNameInput);
    //this.personas.push( personaAñadida );
    this.personaCreada.emit(personaAñadida);
  }
}
