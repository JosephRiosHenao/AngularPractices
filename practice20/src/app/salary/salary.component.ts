import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {
  number1:string = "";
  number2:string = "";
  result:string = "000";

  constructor() { }

  ngOnInit(): void {
  }

  calculate(){
    let valueSalary:number = (parseFloat(this.number1) * parseFloat(this.number2))
    let salaryFirstPorcentage:number = valueSalary * 0.04;
    let salarySecondPorcentage:number = valueSalary * 0.05;
    this.result = ( valueSalary + salaryFirstPorcentage + salarySecondPorcentage).toFixed(3);
  }
}
