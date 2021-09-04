import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.model';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  user!: firebase.User;
  token:string = "";
  users!: Person[];
  tasks!: Task[];




  constructor(private authFire:AngularFireAuth, public router:Router, public http:HttpClient ) { 
    authFire.onAuthStateChanged( user => {
      if(user) {
        this.user = user;
        console.log(user);
        if (router.url == "/login"){
          router.navigate(["/"])
        }

        authFire.idToken.subscribe( token => {
          this.token = token!;
          http.get("https://controlclients-5d2b0-default-rtdb.firebaseio.com/.json?auth="+token).subscribe(data => {
            console.log(data)
          })
          
        })
      }else {
        router.navigate(["/login"])
      }
    })
  }


  login(email:string, pass:string){
    console.log("login with: "+email+" "+pass)
    this.authFire.signInWithEmailAndPassword(email,pass).then( user => {
      if(user){
        this.user = user.user!;
        this.router.navigate(["/"])
      }
    })
  }

  postTask(task:Task){
    this.http.post("https://controlclients-5d2b0-default-rtdb.firebaseio.com/tasks.json?auth="+this.token, task).subscribe(data => console.log(data))
  }
  
  postUser(person:Person){
    this.http.post("https://controlclients-5d2b0-default-rtdb.firebaseio.com/persons.json?auth="+this.token, person).subscribe(data => console.log(data))
  }
}
