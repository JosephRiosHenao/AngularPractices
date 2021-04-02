import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class DataService{
    constructor(private httpClient:HttpClient){}

    loadPersons():Observable<any>{
        return this.httpClient.get('https://list-persons-angular-default-rtdb.firebaseio.com/datos.json');
    }

    savePersons(personas:Persona[]){
        this.httpClient.put('https://list-persons-angular-default-rtdb.firebaseio.com/datos.json',personas).subscribe
        (
            response => console.log('Result save persons: '+response),
            error => console.log('Error save perons: '+error)
        );
    }

    modifyPersons(index:number, persona:Persona){
        let url:string = "https://list-persons-angular-default-rtdb.firebaseio.com/datos/"+index+".json";
        this.httpClient.put(url,persona).subscribe
        (
            response => console.log("Result modify person: "+response),
            error => console.log("Error modify person: "+error),
        );
    }

    deletePerson(index:number){
        let url:string = "https://list-persons-angular-default-rtdb.firebaseio.com/datos/"+index+".json";
        this.httpClient.delete(url).subscribe
        (
            response => console.log("Result delete person: "+response),
            error => console.log("Error delete person: "+error),
        );
    }
}