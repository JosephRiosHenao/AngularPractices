import { Component } from '@angular/core';
import { Operadores } from './operadores.mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title  = 'Calculadora - App';
  public result = 0;

  sumar(numeros:Operadores)      {this.result = numeros.num1 + numeros.num2;}
  restar(numeros:Operadores)     {this.result = numeros.num1 - numeros.num2;}
  multiplicar(numeros:Operadores){this.result = numeros.num1 * numeros.num2;}
  dividir(numeros:Operadores)    {this.result = numeros.num1 / numeros.num2;}
}
