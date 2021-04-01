import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
    ingresos:Ingreso[]=[
        new Ingreso("Salario",2100),
        new Ingreso("Venta coche",1500)
    ]

    delete(ingreso:Ingreso){
        const index:number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(index,1);
    }
}