import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { DatabaseService } from 'src/app/services/database.service';
import { Task } from "src/app/models/task.model";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private db:DatabaseService) { }

  persons:Person[] = this.db.persons;
  persons$!:Observable<Person[]>;

  tasks:Task[] = this.db.tasks;
  tasks$!: Observable<Task[]>;

  ngOnInit(): void {
    this.persons$ = this.db.getPersons$();
    this.persons$.subscribe(data => this.persons = data);
    
    this.tasks$ = this.db.getTasks$();
    this.tasks$.subscribe(data => this.tasks = data);
  }

  

}
