import { Component } from '@angular/core';
import { Student } from './models/student.model';
import { DatabaseService } from './services/database.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private database:DatabaseService) {}

  studentsDB:Student[] = [
    {name: 'Juan', lastName: 'Perez', code: 0, birthYear: new Date()},
    {name: 'Juan', lastName: 'Perez', code: 1, birthYear: new Date()},
    {name: 'Juan', lastName: 'Perez', code: 2, birthYear: new Date()},
    {name: 'Juan', lastName: 'Perez', code: 3, birthYear: new Date()},
  ]

  studentForm:Student = new Student()
  editMode:boolean = false;

  cleanForm(){
    this.studentForm = new Student()
  }
  // CREATE
  addStudent(){
    this.studentForm.code = this.studentsDB.length
    this.studentsDB.push(this.studentForm)
    this.cleanForm()
  }
  // READ
  selectStudent(index:number = 0){
    if (this.editMode && this.studentsDB[index] == this.studentForm) {
      this.editMode = false;
      this.studentForm = new Student()
    }else{
      this.editMode = true;
      this.studentForm = this.studentsDB[index]
    }
  }
  // UPDATE
  editStudent(code:number){
    this.studentsDB[code] = this.studentForm
    this.cleanForm()
  }
  // DELETE
  deleteStudent(){
    console.log(this.studentForm.code)
    this.studentsDB.splice(this.studentForm.code,1)
    this.editMode = false;
    this.cleanForm()
  }

  save(){
    this.database.saveData(this.studentsDB)
  }

  load(){
    this.studentsDB = this.database.loadData()
  }

}
