import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styles: [
  ]
})
export class PersonaComponent {


  @Input() persona:Persona;
  @Input() i:number;
  
  // @Output() personaEliminada = new EventEmitter<number>();

  constructor(private personasService:PersonasService){}

  deletePersona(){
    // this.personas.splice(index,1);
    this.personasService.deletePersona(this.i);
    // this.personaEliminada.emit(index);
  }

  editPersona(){
    this.personasService.edit.emit(this.i);
  }

}
