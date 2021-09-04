import { DB } from './../models/db.model';
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
  persons: Person[] = [];
  tasks: Task[] = [];




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
          http.get<DB>("https://controlclients-5d2b0-default-rtdb.firebaseio.com/.json?auth="+token).subscribe( (data) => {

            for (let key in data.tasks){
              this.tasks.push((data.tasks[key]))
            }
            console.log(this.tasks)

            for (let key in data.persons){
              this.persons.push((data.persons[key]))
            }
            console.log(this.persons)
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
    this.http.post<{name:string}>("https://controlclients-5d2b0-default-rtdb.firebaseio.com/tasks.json?auth="+this.token, task).subscribe(data => {
      task.id = data.name
      this.http.put("https://controlclients-5d2b0-default-rtdb.firebaseio.com/tasks/"+data.name+".json?auth="+this.token, task).subscribe(data => {
        this.tasks.push(task)
      })
    })
  }
  
  postPerson(person:Person){
    this.http.post<{name:string}>("https://controlclients-5d2b0-default-rtdb.firebaseio.com/persons.json?auth="+this.token, person).subscribe(data => {
      person.id = data.name
      this.http.put("https://controlclients-5d2b0-default-rtdb.firebaseio.com/persons/"+data.name+".json?auth="+this.token, person).subscribe(data => {
        this.persons.push(person)
      })
    })
  }
}
