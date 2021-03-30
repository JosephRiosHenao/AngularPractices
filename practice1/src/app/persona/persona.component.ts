import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  public nombre:string = 'Juan';
  public apellido:string = 'Perez';
  private edad:number = 28;


  getEdad = ():number => this.edad;
}
