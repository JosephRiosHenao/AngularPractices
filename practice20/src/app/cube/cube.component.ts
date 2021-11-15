import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit {
  number1:string = "";
  result:string = "000";

  constructor() { }

  ngOnInit(): void {
  }

  calculate(){
    this.result = (6*(parseFloat(this.number1)**2)).toFixed(3);
  }
}
