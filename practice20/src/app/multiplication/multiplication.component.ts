import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {

  number1:string = "";
  number2:string = "";
  result:string = "000";


  constructor() { }

  ngOnInit(): void {
  }

  calculate(){
    this.result = (parseFloat(this.number1) * parseFloat(this.number2)).toFixed(3);
  }

}
