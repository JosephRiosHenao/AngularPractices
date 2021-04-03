import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { LoginService } from './login/login.service';

@Injectable()
export class DataService{
    constructor(private httpClient:HttpClient,
                private loginService:LoginService){}

    loadPersons():Observable<any>{
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://list-persons-angular-default-rtdb.firebaseio.com/datos.json?auth='+token);
    }

    savePersons(personas:Persona[]){
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://list-persons-angular-default-rtdb.firebaseio.com/datos.json?auth='+token,personas).subscribe
        (
            response => console.log('Result save persons: '+response),
            error => console.log('Error save perons: '+error)
        );
    }

    modifyPersons(index:number, persona:Persona){
        const token = this.loginService.getIdToken();
        let url:string = "https://list-persons-angular-default-rtdb.firebaseio.com/datos/"+index+".json?auth="+token;
        this.httpClient.put(url,persona).subscribe
        (
            response => console.log("Result modify person: "+response),
            error => console.log("Error modify person: "+error),
        );
    }

    deletePerson(index:number){
        const token = this.loginService.getIdToken();
        let url:string = "https://list-persons-angular-default-rtdb.firebaseio.com/datos/"+index+".json?auth="+token;
        this.httpClient.delete(url).subscribe
        (
            response => console.log("Result delete person: "+response),
            error => console.log("Error delete person: "+error),
        );
    }
}