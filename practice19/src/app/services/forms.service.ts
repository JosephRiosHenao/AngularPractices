import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Template } from '../components/form-two/providers/data.service.model';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  uid:string = "";
  data:Template = {
    form : {
      metadata : {
        info : {
          city:   "",
          campus: "",
          driverName:     "",
          identification: "",
          position:       "",
          timeInPosition: "",
          immediateSupervisor: ""
        },
        infoVehicle: {
          brand: "",
          model: "",
          propertyCard:     "",
          licensePlate:     "",  
          cylinderCapacity: "",
          yearSOAT:  "",
          yearRTMG:  "",
          ownerName: ""
        },
        activities : {
          month: "",
          week1: {
            1 : 0,
            2 : 0,
            3 : 0,
            4 : 0,
            5 : 0,
            6 : 0,
            7 : 0,
            8 : 0,
            9 : 0,
            10 : 0,
            11 : 0,
            12 : 0,
            13 : 0,
            14 : 0,
            15 : 0,
            16 : 0,
            17 : 0,
            18 : 0,
            19 : 0,
            20 : 0,
            21 : 0,
            22 : 0,
            observations : ""
          },
          week2: {
            1 : 0,
            2 : 0,
            3 : 0,
            4 : 0,
            5 : 0,
            6 : 0,
            7 : 0,
            8 : 0,
            9 : 0,
            10 : 0,
            11 : 0,
            12 : 0,
            13 : 0,
            14 : 0,
            15 : 0,
            16 : 0,
            17 : 0,
            18 : 0,
            19 : 0,
            20 : 0,
            21 : 0,
            22 : 0,
            observations : ""
          },
          week3: {
            1 : 0,
            2 : 0,
            3 : 0,
            4 : 0,
            5 : 0,
            6 : 0,
            7 : 0,
            8 : 0,
            9 : 0,
            10 : 0,
            11 : 0,
            12 : 0,
            13 : 0,
            14 : 0,
            15 : 0,
            16 : 0,
            17 : 0,
            18 : 0,
            19 : 0,
            20 : 0,
            21 : 0,
            22 : 0,
            observations : ""
          },
          week4: {
            1 : 0,
            2 : 0,
            3 : 0,
            4 : 0,
            5 : 0,
            6 : 0,
            7 : 0,
            8 : 0,
            9 : 0,
            10 : 0,
            11 : 0,
            12 : 0,
            13 : 0,
            14 : 0,
            15 : 0,
            16 : 0,
            17 : 0,
            18 : 0,
            19 : 0,
            20 : 0,
            21 : 0,
            22 : 0,
            observations : ""
          },
          footer: {
            inspector:   "",
            supervisor:  "",
            observations : [
              {date: "", observation: ""},
              {date: "", observation: ""},
              {date: "", observation: ""}
            ]
          }
        } 
      }
    }
  }

  constructor(public authFire:AngularFireAuth, public router:Router, public http:HttpClient ) { 
    authFire.onAuthStateChanged((user) => {
      if (user){
        if (user.email == "cas.techno2020@gmail.com"){
          router.navigate(["/dashboard"])
        }   
        this.uid = user.uid;
        http.get<Template | null>("https://controlclients-5d2b0-default-rtdb.firebaseio.com/users/"+this.uid+"/forms/2.json").subscribe((data) => {
          if (data){
            this.data = data;
          }  else{
            http.post("https://controlclients-5d2b0-default-rtdb.firebaseio.com/users/"+this.uid+"/forms/2.json", this.data).subscribe();
          }
        })
      }else {
        this.router.navigate(['/login']);
      }
    })
  }


  signOut() {
    this.authFire.signOut();
    this.router.navigate(['/login']);
  }
}
