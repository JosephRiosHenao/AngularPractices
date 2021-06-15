import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  public ancho:number = 0;
  public largo:number = 0;
  public areaR:number = 0;
  public anchoT:number = 0;
  public alturaT:number = 0;
  public areaTR:number = 0;
  public perimetroR:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calculate() {
    this.areaR = this.largo * this.ancho;
    this.perimetroR = (this.largo * 2) + (this.ancho * 2);
  }
  calculateT() {
    this.areaTR = (this.alturaT * this.anchoT) /2;
  }

}
