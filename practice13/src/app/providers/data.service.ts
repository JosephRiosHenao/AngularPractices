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
      dateInit    : "",
      nameProject : "",
      namePerson  : "",
      timeInit    : "",
      timeFinish  : "",
      confirm     : false,
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
      confirm : false,
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
      },
      confirm : false,
    },
    after : {
      form:{
        1:2,
        2:2,
        3:2,
        4:2,
        5:2,
        6:2
      },
      confirm : false,
    },
    info : {
      observation: "",
    }
  },
}
  constructor() { }
}
