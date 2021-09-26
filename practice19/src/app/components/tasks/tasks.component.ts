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
    dateFinish : new FormControl(''),
  })
  
  constructor(private db:DatabaseService) { }
  
  tasks$!: Observable<Task[]>;
  tasks:Task[] = [{
    name: '',
    description: '',
    status: 0,
    initDate: '',
    finishDate: '',
    workTime: 0,
    user: '',
    id: ''
  }];

  dtOptions:any = {};
  dtTriggerTask: Subject<any> = new Subject<any>();

  first:boolean = true;
  createMode:boolean = true;
  taskModifyIndex:number = 0;

  ngOnInit(): void {
    if (this.db.tasks != null && this.db.tasks.length > 0) {
      this.tasks = this.db.tasks;
    }

    this.dtOptions = {
      language: {
        url: '//cdn.datatables.net/plug-ins/1.11.1/i18n/es_es.json',
      },
      dom: 'Bfrtip',
      buttons: [
        'columnsToggle',
        'copy',
        'print',
        'excel'
      ],
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
    }
    
    this.tasks$ = this.db.getTasks$()
    this.tasks$.subscribe(data => {
      this.tasks = data
      if (this.first) {
        // this.dtTriggerTask.next();
        this.first = false
      }
    });
  }

  send(){
    if (this.createMode) {
      let data:Task = {
        name: this.formTask.value.name,
        description: this.formTask.value.description,
        status: 0,
        initDate: this.formTask.value.dateInit,
        finishDate: this.formTask.value.dateFinish,
        workTime: this.formTask.value.timeTask,
        user: "",
        id: ""
      };
      this.db.postTask(data)
    } else {
      let data:Task = {
        name: this.formTask.value.name,
        description: this.formTask.value.description,
        status: this.tasks[this.taskModifyIndex].status,
        initDate: this.formTask.value.dateInit,
        finishDate: this.formTask.value.dateFinish,
        workTime: this.formTask.value.timeTask,
        user: this.tasks[this.taskModifyIndex].user,
        id: this.tasks[this.taskModifyIndex].id
      };
      this.db.putTask(data, this.taskModifyIndex)
      this.cancelModify();
    }
    this.formTask.reset();
  }

  deleteTask(id:string, index:number){
    this.db.deleteTask(id,index);
  }

  cancelModify() {
    this.createMode = true;
    this.formTask.reset();
  }

  modeModifyTask (id:string, index:number) {
    this.createMode = false;
    this.formTask.setValue({
      name: this.tasks[index].name,
      description: this.tasks[index].description,
      timeTask: this.tasks[index].workTime,
      dateInit: this.tasks[index].initDate,
      dateFinish: this.tasks[index].finishDate
    })
    this.taskModifyIndex = index;
    window.scrollTo(0, 0);
  }
}
