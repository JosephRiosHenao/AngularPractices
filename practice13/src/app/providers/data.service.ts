import { Injectable } from '@angular/core';
import { Data } from './data.service.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data:Data = new Data();


  public setForm1(v : number) {
    this.data.form1 = v;
    console.log(v);
  }


  constructor() { }
}
