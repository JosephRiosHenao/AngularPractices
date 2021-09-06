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
  public valueSelect:string[] = ["none"];
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
      this.persons.forEach((__,index)=>{
        this.valueSelect[index] = "none"
      })
    });

    this.tasks$ = this.db.getTasks$();
    this.tasks$.subscribe((data) => {
      console.log("observable tarea")
      console.log(data)
      this.tasks = data;
      this.defineSelectData()
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

  defineSelectData(){
      this.selectData = [];
      this.selectData = [{id: "none", text: "Selecciona una tarea"}];
      this.tasks.filter(task => task.status == 0).forEach(task => {
        this.selectData.push({id: task.id, text: task.name})
      })
      console.log(this.selectData)
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  assingTask(id:string, index:number){
    if (this.valueSelect[index] != undefined && this.valueSelect[index] != "none"){
      console.log(this.valueSelect)
      this.db.assingTask(id, index, this.valueSelect[index])
      this.valueSelect[index] = "none"
    }
  }

  desassingTask(id:string, index:number){
    this.db.desassingTask(id, index);
  }
}
