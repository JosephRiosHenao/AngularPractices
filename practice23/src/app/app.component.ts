import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data:any = ["NAN","NAN"];

  updateState(state:number, value:string){
    this.data[state] = value;
  }
}
