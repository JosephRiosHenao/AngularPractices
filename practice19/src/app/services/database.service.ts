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
  persons: Person[] = [{    
    name: '',
    lastname: '',
    state: 0,
    city: '',
    id: '',
    task: '',
    info: ''
  }];
  tasks: Task[] = [{
    name: '',
    description: '',
    status: 0,
    initDate: '',
    finishDate: '',
    workTime: 0,
    user: '',
    id: ''
  }];

  private task$ = new Subject<Task[]>();
  public persons$ = new Subject<Person[]>();


  constructor(private authFire:AngularFireAuth, public router:Router, public http:HttpClient ) { 
    authFire.onAuthStateChanged( user => {
      if(user) {
        if (user.email != "cas.techno2020@gmail.com"){
          router.navigate(["/forms"])
        }
        this.user = user;

        authFire.idToken.subscribe( token => {
          this.token = token!;
          http.get<DB | null>("https://controlclients-5d2b0-default-rtdb.firebaseio.com/.json?auth="+token).subscribe( (data) => {
            this.persons = [];
            this.tasks = [];
            if (data){
              if(data.persons){
                for (let key in data.persons){
                  this.persons.push((data.persons[key]))
                }
              }
              if (data.tasks){
                for (let key in data.tasks){
                  this.tasks.push((data.tasks[key]))
                }
              }
            }else{
              console.log("No data")
            }
            this.persons$.next(this.persons)
            this.task$.next(this.tasks);
          })  
        })
      }else {
        router.navigate(["/login"])
      }
    })
  }

  postTask(task:Task){
    this.http.post<{name:string}>("https://controlclients-5d2b0-default-rtdb.firebaseio.com/tasks.json?auth="+this.token, task).subscribe(data => {
      task.id = data.name
      this.http.patch("https://controlclients-5d2b0-default-rtdb.firebaseio.com/tasks/"+data.name+".json?auth="+this.token, {id: data.name}).subscribe(() => {
        this.tasks.push(task)
        this.task$.next(this.tasks)
      })
    })
  }
  
  postPerson(person:Person){
    this.http.post<{name:string}>("https://controlclients-5d2b0-default-rtdb.firebaseio.com/persons.json?auth="+this.token, person).subscribe(data => {
      person.id = data.name
      this.http.patch("https://controlclients-5d2b0-default-rtdb.firebaseio.com/persons/"+data.name+".json?auth="+this.token, {id: data.name}).subscribe(() => {
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
    this.http.delete("https://controlclients-5d2b0-default-rtdb.firebaseio.com/tasks/"+id+".json?auth="+this.token).subscribe(() => {})
    this.task$.next(this.tasks);
  }

  deletePerson(id:string, index:number){
    this.persons.splice(index,1);
    this.http.delete("https://controlclients-5d2b0-default-rtdb.firebaseio.com/persons/"+id+".json?auth="+this.token).subscribe(() => {})
    this.persons$.next(this.persons);
  }
  
  putTask(task:Task, index:number){
    this.tasks[index] = task;
    this.http.put("https://controlclients-5d2b0-default-rtdb.firebaseio.com/tasks/"+task.id+".json?auth="+this.token, task).subscribe(() => {})
    this.task$.next(this.tasks);
  }
  putPerson(person:Person, index:number){
    this.persons[index] = person;
    this.http.put("https://controlclients-5d2b0-default-rtdb.firebaseio.com/persons/"+person.id+".json?auth="+this.token, person).subscribe(() => {})
    this.persons$.next(this.persons);
  }

  assingTask(id: string, index: number, value:string) {
    this.persons[index].task = value;
    this.persons[index].state = 1;
    this.http.put("https://controlclients-5d2b0-default-rtdb.firebaseio.com/persons/"+id+".json?auth="+this.token, this.persons[index]).subscribe(() => {
      this.http.patch("https://controlclients-5d2b0-default-rtdb.firebaseio.com/tasks/"+value+".json?auth="+this.token, {user: id, status:1, initDate: Date()}).subscribe(() => {
        this.http.get<any>("https://controlclients-5d2b0-default-rtdb.firebaseio.com/tasks.json?auth="+this.token).subscribe(data => {
          let tasksNew:Task[] = [];
          for (let key in data){
            tasksNew.push((data[key]))
          }  
          this.tasks = tasksNew;
          this.task$.next(this.tasks);
          this.persons$.next(this.persons);
        })
      })
    })
  }
  
  desassingTask(id:string, index:number){
    this.http.patch("https://controlclients-5d2b0-default-rtdb.firebaseio.com/tasks/"+this.persons[index].task+".json?auth="+this.token, {status: 0, user:""}).subscribe(() => {
      this.persons[index].task = "";
      this.persons[index].state = 0;
      this.http.put("https://controlclients-5d2b0-default-rtdb.firebaseio.com/persons/"+id+".json?auth="+this.token, this.persons[index]).subscribe(() => {
        this.http.get<any>("https://controlclients-5d2b0-default-rtdb.firebaseio.com/tasks.json?auth="+this.token).subscribe(data => {
          let tasksNew:Task[] = [];
          for (let key in data){
            tasksNew.push((data[key]))
          }  
          this.tasks = tasksNew;
          this.task$.next(this.tasks);
          this.persons$.next(this.persons);
        })
      })
    })
  }
  
  infoTask(id:string):Observable<Task>{
    return this.http.get<Task>("https://controlclients-5d2b0-default-rtdb.firebaseio.com/tasks/"+id+".json?auth="+this.token)
  }
  
  finalizeTask(task:Task){
    let dateFinish = new Date();
    
    let time = () => {
      let date1 = new Date(task.initDate)
      let date2 = new Date()
      let diffTime = Math.abs(date2.getTime() - date1.getTime())
      return (diffTime/3600000)
    }


    this.http.patch("https://controlclients-5d2b0-default-rtdb.firebaseio.com/tasks/"+task.id+".json?auth="+this.token, {status: 3, user: "", workTime: time(), finishDate: dateFinish}).subscribe(() => {
      this.http.get<any>("https://controlclients-5d2b0-default-rtdb.firebaseio.com/tasks.json?auth="+this.token).subscribe(data => {
        let tasksNew:Task[] = [];
        for (let key in data){
          tasksNew.push((data[key]))
        }  
        this.tasks = tasksNew;
        this.task$.next(this.tasks);
      })
    })
    this.http.patch("https://controlclients-5d2b0-default-rtdb.firebaseio.com/persons/"+task.user+".json?auth="+this.token, {state: 0, task: ""}).subscribe(() => {
      this.http.get<any>("https://controlclients-5d2b0-default-rtdb.firebaseio.com/persons.json?auth="+this.token).subscribe(data => {
        let personsNew:Person[] = [];
        for (let key in data){
          personsNew.push((data[key]))
        }    
        this.persons = personsNew;  
        this.persons$.next(this.persons);
      })
    })
  }

  suspendTask(task:Task){
    this.http.patch("https://controlclients-5d2b0-default-rtdb.firebaseio.com/tasks/"+task.id+".json?auth="+this.token, {status: 2, user: ""}).subscribe(() => {
      this.http.get<any>("https://controlclients-5d2b0-default-rtdb.firebaseio.com/tasks.json?auth="+this.token).subscribe(data => {
        let tasksNew:Task[] = [];
        for (let key in data){
          tasksNew.push((data[key]))
        }  
        this.tasks = tasksNew;
        this.task$.next(this.tasks);
      })
    })
    this.http.patch("https://controlclients-5d2b0-default-rtdb.firebaseio.com/persons/"+task.user+".json?auth="+this.token, {state: 0, task: ""}).subscribe(() => {
      this.http.get<any>("https://controlclients-5d2b0-default-rtdb.firebaseio.com/persons.json?auth="+this.token).subscribe(data => {
        let personsNew:Person[] = [];
        for (let key in data){
          personsNew.push((data[key]))
        }    
        this.persons = personsNew;
        this.persons$.next(this.persons);
      })
    })
  }

  singOut(){
    this.authFire.signOut();
    this.router.navigate(['/login']);
  }

}
