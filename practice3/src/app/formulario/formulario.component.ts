import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();
  
  public nameInput:string = "";
  // public lastNameInput:string = "";
  @ViewChild('lastNameInput') apellido:ElementRef;

  addPersona(){
    let personaAñadida = new Persona(this.nameInput,this.apellido.nativeElement.value);
    //this.personas.push( personaAñadida );
    this.personaCreada.emit(personaAñadida);
  }
}
