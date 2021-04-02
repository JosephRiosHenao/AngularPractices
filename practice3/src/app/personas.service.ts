import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { DataService } from "./data.service";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";


@Injectable()
export class PersonasService{
    modifyPersona(nameInput: string, apellidoInput: string, index:number) {
        this.personas[index].nombre = nameInput;
        this.personas[index].apellido = apellidoInput;
    }
    queryPersona(index:number) {
        let persona = this.personas[index]
        return persona;
    }
    public personas:Persona[] = [];

    edit = new EventEmitter<number>();

    constructor(private loggingService:LoggingService,
                private dataService:DataService){}

    loadPersons():Observable<any>{
        return this.dataService.loadPersons();
    }

    setPersons(personas:Persona[]){
        this.personas = personas;
    }
    
    addPersona(persona:Persona){
        this.loggingService.sendMessageConsole("Se agrego persona: "+persona.nombre+" "+persona.apellido);
        if(this.personas == null){
            this.personas = [];
        }
        this.personas.push(persona);
        this.dataService.savePersons(this.personas);
    }
    deletePersona(index:number){
        this.loggingService.sendMessageConsole("Se elimino perosna: "+(index+1)+". "+this.personas[index].nombre+" "+this.personas[index].apellido);
        this.personas.splice(index,1);
    }
}