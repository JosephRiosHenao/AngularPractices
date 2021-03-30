import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
    public estado:boolean = true;
    public message:string = "No se ha agregado ninguna persona";
    public titulo:string = "Ingeniero";

    stateButton():void {
        this.estado = !this.estado;
    }

    addPersona(){
        this.message = "Persona agregada";
    }

    // modifyTitulo(event:Event){
    //     this.titulo = (<HTMLInputElement>event.target).value;
    // }
}