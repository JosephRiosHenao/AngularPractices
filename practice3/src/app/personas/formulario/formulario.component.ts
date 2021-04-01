import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../../LoggingService.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  // @Output() personaCreada = new EventEmitter<Persona>();
  
  public nameInput:string = "";
  // public lastNameInput:string = "";
  @ViewChild('lastNameInput') apellido:ElementRef;

  constructor(private loggingService:LoggingService,
              private personasService:PersonasService,
              private router:Router){
                // this.personasService.edit.subscribe(
                //   (indice:number) => alert("el indice es: "+indice)
                // )
              }

  addPersona(){
    let personaAñadida = new Persona(this.nameInput,this.apellido.nativeElement.value);
    // this.loggingService.sendMessageConsole("Enviamos persona:"+this.nameInput+" "+this.apellido.nativeElement.value);
    this.personasService.addPersona(personaAñadida);
    this.router.navigate(['personas']);
    // this.personas.push( personaAñadida );
    // this.personaCreada.emit(personaAñadida);
  }
}
