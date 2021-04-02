import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { LoggingService } from '../../LoggingService.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit{
  // @Output() personaCreada = new EventEmitter<Persona>();
  
  public nameInput:string = "";
  public apellidoInput:string = "";
  public index:number = 0;
  public state:string = "Agregar";
  // public lastNameInput:string = "";
  // @ViewChild('lastNameInput') apellido:ElementRef;

  constructor(private personasService:PersonasService,
              private router:Router,
              private route:ActivatedRoute){
                // this.personasService.edit.subscribe(
                //   (indice:number) => alert("el indice es: "+indice)
                // )
              }
  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    if(this.index){
      this.state = "Modificar"
      let persona:Persona = this.personasService.queryPersona(this.index);
      this.nameInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }else{
      this.state = "Aregar"
    }
  }

  addPersona(){
    if(this.index){
      this.personasService.modifyPersona(this.nameInput,this.apellidoInput, this.index);
    }else{      
      let personaAñadida = new Persona(this.nameInput,this.apellidoInput);
      // this.loggingService.sendMessageConsole("Enviamos persona:"+this.nameInput+" "+this.apellido.nativeElement.value);
      this.personasService.addPersona(personaAñadida);
    }
    this.router.navigate(['personas']);

    // this.personas.push( personaAñadida );
    // this.personaCreada.emit(personaAñadida);
  }
}
