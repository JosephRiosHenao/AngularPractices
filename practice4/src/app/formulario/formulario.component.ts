import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoServicio } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  type:string = "ingresoOperation";
  description:string = "";
  value:number = 0;

  constructor(private ingresoServicio:IngresoServicio,
              private egresoServicio:EgresoServicio) { }

  ngOnInit(): void {
  }
  
  typeOperation(evento:any){
    this.type = evento.target.value;
  }

  addValue(){
    if(this.type==="ingresoOperation"){
      this.ingresoServicio.ingresos.push(new Ingreso(this.description,this.value));
    }else{
      this.egresoServicio.egresos.push(new Egreso(this.description,this.value));
    }
  }
}
