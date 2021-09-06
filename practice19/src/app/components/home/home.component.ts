import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { DatabaseService } from 'src/app/services/database.service';
import { Task } from 'src/app/models/task.model';
import { Observable, Subject } from 'rxjs';
import { Select2OptionData } from 'ng-select2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public selectData:Select2OptionData[] = [{id: "none", text: "Selecciona una tarea"}];
  public valueSelect:string[] = [];
  public options:any;
  
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  
  constructor(public db: DatabaseService) {}
  
  persons: Person[] = this.db.persons;
  persons$!: Observable<Person[]>;
  
  tasks: Task[] = this.db.tasks;
  tasks$!: Observable<Task[]>;
  
  isFirst:boolean = true;

  ngOnInit(): void {
    for (let index = 0; index < this.persons.length; index++) {
      this.valueSelect.push("none");
    }

  this.dtOptions = {
    language: {
      url: '//cdn.datatables.net/plug-ins/1.11.1/i18n/es_es.json',
    },
    // Declare the use of the extension in the dom parameter
    dom: 'Bfrtip',
    // Configure the buttons
    buttons: [
      'columnsToggle',
      'copy',
      'print',
      'excel'
    ],
    pagingType: 'full_numbers',
    // pageLength: 5
  }

    this.persons$ = this.db.getPersons$();
    this.persons$.subscribe((data) => {
      this.persons = data;
    });

    this.tasks$ = this.db.getTasks$();
    this.tasks$.subscribe((data) => {
      this.tasks = data;
      this.selectData = [{id: "none", text: "Selecciona una tarea"}];
      this.tasks.forEach((task) => {
        this.selectData.push(({id: task.id, text: task.name}))
      })
      if (this.isFirst){
        this.dtTrigger.next();
        this.isFirst = false;
      }
    });

    this.options = {
      closeOnSelect: true,
      width: '200'
    };
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  assingTask(id:string, index:number){
    this.db.assingTask(id, index, this.valueSelect[index])
  }
}
