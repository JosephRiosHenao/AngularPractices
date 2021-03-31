import { Component, EventEmitter, Output } from '@angular/core';
import { Operadores } from '../operadores.mode';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  @Output() Sum = new EventEmitter<Operadores>();
  @Output() Res = new EventEmitter<Operadores>();
  @Output() Mul = new EventEmitter<Operadores>();
  @Output() Div = new EventEmitter<Operadores>();

  num1:number = 0;
  num2:number = 0;
  numeros = new Operadores(0,0);
  setNumbers(){
    this.numeros.num1 = this.num1;
    this.numeros.num2 = this.num2;
  }

  sumar(){
    this.setNumbers();
    this.Sum.emit(this.numeros);
  }
  restar(){
    this.setNumbers();
    this.Res.emit(this.numeros);
  }
  multiplicar(){
    this.setNumbers();
    this.Mul.emit(this.numeros);
  }
  dividir(){
    this.setNumbers();
    this.Div.emit(this.numeros);
  }
}
