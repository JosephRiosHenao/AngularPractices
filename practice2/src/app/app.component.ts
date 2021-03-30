import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Calculadora - App';
  public num1:number = 0;
  public num2:number = 0;
  public result:number = 0;

  sumar():void {
    this.result = this.num1 + this.num2;
  }
}
