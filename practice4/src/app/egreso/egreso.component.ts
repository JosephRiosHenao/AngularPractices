import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos:Egreso[]=[]
  constructor(private egresoServicio:EgresoServicio) { }

  ngOnInit(): void {
    this.egresos = this.egresoServicio.egresos;
  }
  
  @Input() ingresoTotal:number = 0;

  deleteEgreso(egreso:Egreso){
    this.egresoServicio.delete(egreso);
  }

  getPorcentaje(egreso:Egreso){
    return egreso.value/this.ingresoTotal;
  }
}
