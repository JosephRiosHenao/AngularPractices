import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent implements OnInit {


  number1:string = "";
  number2:string = "";
  result:string = "000";


  constructor() { }

  ngOnInit(): void {
  }

  calculateSum(){
    this.result = (parseFloat(this.number1) + parseFloat(this.number2)).toFixed(3);
  }
}

