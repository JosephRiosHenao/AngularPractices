import { Component } from '@angular/core';
// import { Persona } from './persona.model';
// import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Listado de Personas';
  // public personas:Persona[] = [];

  // constructor(private personasService:PersonasService){}
  // ngOnInit(): void {
  //   this.personas = this.personasService.personas;
  // }

  // addPersona(persona:Persona){
  //   // this.personas.push(persona);
  //   this.personasService.addPersona(persona);
  // }
  // deletePersona(index:number){
  //   // this.personas.splice(index,1);
  //   this.personasService.deletePersona(index);
  // }
}
