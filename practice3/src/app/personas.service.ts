import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";


@Injectable()
export class PersonasService{
    public personas:Persona[] = [
        new Persona('Juan','Perez'), 
        new Persona('Laura','Juarez'),
        new Persona('Karla','Lara')
    ];

    edit = new EventEmitter<number>();

    constructor(private loggingService:LoggingService){}


    
    addPersona(persona:Persona){
        this.loggingService.sendMessageConsole("Se agrego persona: "+persona.nombre+" "+persona.apellido);
        this.personas.push(persona);
    }
    deletePersona(index:number){
        this.loggingService.sendMessageConsole("Se elimino perosna: "+(index+1)+". "+this.personas[index].nombre+" "+this.personas[index].apellido);
        this.personas.splice(index,1);
    }
}