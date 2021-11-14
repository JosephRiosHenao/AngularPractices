import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  number1:string = "";
  number2:string = "";
  result:string = "000";

  nthRoot(n:number, degree:number) {
    return Math.pow(n, 1 / degree);
};

  constructor() { }

  ngOnInit(): void {
  }

  calculate(){
    this.result = this.nthRoot(parseFloat(this.number1),parseFloat(this.number2)).toFixed(3);
  }
}
