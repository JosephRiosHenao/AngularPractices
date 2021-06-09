import { Injectable } from '@angular/core';
import { Data } from './data.service.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data:Data = { form : {
    metadata : {
      enterprise  : "CAS TECHNOLOGY S.A.S",
      city        : "",
      process     : "",
      dateInit    : new Date(),
      nameProject : "",
      namePerson  : "",
      timeInit    : new Date(),
      timeFinish  : new Date(),
    },
    before : {
      contacts:[
        { name : "", tel :"" },
        { name : "", tel :"" },
      ],
      form:{
        1:2,
        2:2,
        3:2,
        4:2,
        5:2,
        6:2,
        7:2,
        8:2,
        9:2,
        10:2,
        11:2,
      },
    },
    during : {
      form:{
        1:2,
        2:2,
        3:2,
        4:2,
        5:2,
        6:2,
        7:2
      }
    },
    after : {
      form:{
        1:2,
        2:2,
        3:2,
        4:2,
        5:2,
        6:2
      }
    },
    info : {
      observation: ""
    }
  },
}
  a(){
    console.log(this.data.form);
  }

  constructor() { }
}
