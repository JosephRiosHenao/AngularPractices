import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  
  constructor(private db:DatabaseService) { }
  
  tasks:Task[] = this.db.tasks;

  ngOnInit(): void {
    this.tasks = this.db.tasks;  
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

  }

}
