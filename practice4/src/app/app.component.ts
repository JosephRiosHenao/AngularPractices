import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoServicio } from './egreso/egreso.service';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoServicio } from './ingreso/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice4';

  ingresos:Ingreso[]=[]
  egresos:Egreso[]=[]

  constructor(private ingresoServicio:IngresoServicio,
              private egresoServicio:EgresoServicio){
                this.ingresos = this.ingresoServicio.ingresos;
                this.egresos = this.egresoServicio.egresos;
              }
  
  getIngresoTotal():number{
    let ingresoTotal:number = 0;
    this.ingresos.forEach(ingreso =>{
      ingresoTotal += ingreso.value;
    });
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal = 0;
    this.egresos.forEach(egreso =>{
      egresoTotal += egreso.value;
    });
    return egresoTotal;
  }

  getPorcentajeTotal() {
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal()-this.getEgresoTotal();
  }
}
