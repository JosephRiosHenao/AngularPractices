import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styles: [
  ]
})
export class PersonaComponent {


  @Input() persona:Persona;
  @Input() i:number;
  
  @Output() personaEliminada = new EventEmitter<number>();

  deletePersona(index:number){
    // this.personas.splice(index,1);
    
    this.personaEliminada.emit(index);
  }

}
