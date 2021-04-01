import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  public personas:Persona[] = [];

  constructor(private personasService:PersonasService,
              private router:Router){}
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

  add(){
    this.router.navigate(['personas/agregar']);
  }
}
