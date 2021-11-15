import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {
  number1:string = "";
  number2:string = "3.14";
  result:string = "000";

  constructor() { }

  ngOnInit(): void {
  }

  calculate(){
    this.result = ((parseFloat(this.number1)**2)*(parseFloat(this.number2))).toFixed(3);
  }
}
