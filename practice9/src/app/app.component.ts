import { Component } from '@angular/core';
import { Person } from './persons.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public name:string = "";
  public lastName:string = "";
  public quality:boolean = false;

  public persons:Array<Person> = [
    {
      name     : "Amanda",
      lastName : "Rodriguez",
      quality  : true
    },
    {
      name     : "Pedro",
      lastName : "Calzone",
      quality  : false
    }
  ];

  addPerson(){
    this.persons.push({name : this.name, lastName : this.lastName, quality : this.quality})
  }

  changeCheckbox(item: any){
    this.quality = item.target.checked;
  }
}
