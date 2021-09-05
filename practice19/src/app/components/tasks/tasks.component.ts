import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  formTask:FormGroup = new FormGroup({
    name : new FormControl('', Validators.required),
    timeTask : new FormControl('', Validators.required),
    description : new FormControl(''),
    dateInit : new FormControl('', Validators.required),
    dateFinish : new FormControl('', Validators.required),
  })
  
  
  constructor(private db:DatabaseService) { 
  }
  
  tasks$!: Observable<Task[]>;
  tasks:Task[] = this.db.tasks;

  dtOptions:any = {};
  dtTrigger: Subject<any> = new Subject<any>();

  first:boolean = true;


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
    
    this.tasks$ = this.db.getTasks$()
    this.tasks$.subscribe(data => {
      this.tasks = data
      if (this.first) {
        this.dtTrigger.next();
        this.first = false
      }
    });

  }

  send(){
    let data:Task = {
      name: this.formTask.value.name,
      description: this.formTask.value.description,
      status: 0,
      initDate: this.formTask.value.dateInit,
      finishDate: this.formTask.value.dateFinish,
      workTime: this.formTask.value.timeTask,
      user: "",
      id: "0"
    };

    this.db.postTask(data)
    this.formTask.reset();

  }

  deleteTask(id:string, index:number){
    this.db.deleteTask(id,index);
  }

}
