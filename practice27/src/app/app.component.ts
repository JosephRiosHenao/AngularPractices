import { Component } from '@angular/core';
import { Student } from './models/student.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  studentsDB:Student[] = [
    {name: 'Juan', lastName: 'Perez', code: 1, birthYear: new Date()},
    {name: 'Juan', lastName: 'Perez', code: 2, birthYear: new Date()},
    {name: 'Juan', lastName: 'Perez', code: 3, birthYear: new Date()},
    {name: 'Juan', lastName: 'Perez', code: 4, birthYear: new Date()},
  ]

  studentForm:Student = new Student()
  editMode:boolean = false;

  cleanForm(){
    this.studentForm = new Student()
  }
  // CREATE
  addStudent(){
    this.studentForm.code = this.studentsDB.length + 1
    this.studentsDB.push(this.studentForm)
    this.cleanForm()
  }
  // READ
  selectStudent(code:number = -1){
    if (this.editMode && this.studentsDB[code-1] == this.studentForm) {
      this.editMode = false;
      this.studentForm = new Student()
    }else{
      this.editMode = true;
      this.studentForm = this.studentsDB[code-1]
    }
  }
  // UPDATE
  editStudent(code:number){
    this.studentsDB[code-1] = this.studentForm
    this.cleanForm()
  }
  // DELETE
  deleteStudent(){
    this.studentsDB.splice(this.studentForm.code-1,1)
    this.cleanForm()
  }

}
