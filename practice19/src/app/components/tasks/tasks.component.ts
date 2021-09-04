import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  formTask:FormGroup = new FormGroup({
    name : new FormControl('', Validators.required),
    timeTask : new FormControl('', Validators.required),
    description : new FormControl('', Validators.required),
    dateInit : new FormControl('', Validators.required),
    dateFinish : new FormControl('', Validators.required),
  })

  constructor() { }

  ngOnInit(): void {
  }

  send(){
    
  }

}
