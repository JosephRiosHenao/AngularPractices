import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  characters = {}

  constructor( private http:HttpClient ) { 
    // http.get("https://rickandmortyapi.com/api/character").subscribe( data => this.characters = data );

  }
}
