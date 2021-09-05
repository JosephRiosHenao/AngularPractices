import { Observable } from 'rxjs/internal/Observable';
import { DB } from './../models/db.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.model';
import { Person } from '../models/person.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  user!: firebase.User;
  token:string = "";
  persons: Person[] = [];
  tasks: Task[] = [];

  private task$ = new Subject<Task[]>();
  public persons$ = new Subject<Person[]>();


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

            this.task$.next(this.tasks);
            this.persons$.next(this.persons)
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
        this.task$.next(this.tasks)
      })
    })
  }
  
  postPerson(person:Person){
    this.http.post<{name:string}>("https://controlclients-5d2b0-default-rtdb.firebaseio.com/persons.json?auth="+this.token, person).subscribe(data => {
      person.id = data.name
      this.http.put("https://controlclients-5d2b0-default-rtdb.firebaseio.com/persons/"+data.name+".json?auth="+this.token, person).subscribe(data => {
        console.log(person)
        this.persons.push(person)
        this.persons$.next(this.persons)
      })
    })
  }

  getTasks$():Observable<Task[]> {
    return this.task$.asObservable();
  }

  getPersons$():Observable<Person[]> {
    return this.persons$.asObservable();
  }

  deleteTask(id:string, index:number){
    this.tasks.splice(index,1);
    this.http.delete("https://controlclients-5d2b0-default-rtdb.firebaseio.com/tasks/"+id+".json?auth="+this.token).subscribe(data => {})
    this.task$.next(this.tasks);
  }

  deletePerson(id:string, index:number){
    this.persons.splice(index,1);
    this.http.delete("https://controlclients-5d2b0-default-rtdb.firebaseio.com/persons/"+id+".json?auth="+this.token).subscribe(data => {})
    this.persons$.next(this.persons);
  }
  
  putTask(task:Task, index:number){
    this.tasks[index] = task;
    this.http.put("https://controlclients-5d2b0-default-rtdb.firebaseio.com/tasks/"+task.id+".json?auth="+this.token, task).subscribe(data => {})
    this.task$.next(this.tasks);
  }
  putPerson(person:Person, index:number){
    this.persons[index] = person;
    this.http.put("https://controlclients-5d2b0-default-rtdb.firebaseio.com/persons/"+person.id+".json?auth="+this.token, person).subscribe(data => {})
    this.persons$.next(this.persons);
  }
}
