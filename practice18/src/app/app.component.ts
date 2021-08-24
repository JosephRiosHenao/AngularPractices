import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { APIService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice18';
  characters:any = {};
  constructor (private apiService:APIService, http:HttpClient){
    http.get("https://rickandmortyapi.com/api/character").subscribe( data => {
      this.characters = data
      console.log("data update!")
      console.log(this.characters)
    } );


  }
}
