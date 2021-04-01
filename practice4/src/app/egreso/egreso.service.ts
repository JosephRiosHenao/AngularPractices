import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egresos:Egreso[]=[
        new Egreso("Renta departamento",900),
        new Egreso("Ropa",435)
    ]

    delete(egreso:Egreso){
        const index = this.egresos.indexOf(egreso);
        this.egresos.splice(index,1);
    }
}