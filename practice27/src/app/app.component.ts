import { Teacher } from './models/teacher.model';
import { Component } from '@angular/core';
import { Student } from './models/student.model';
import { DatabaseService } from './services/database.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private database:DatabaseService) {
    this.load()

  }

  studentsDB:Student[] = []
  teachersDB:Teacher[] = []

  studentForm:Student = new Student()
  teacherForm:Teacher = new Teacher()

  editModeStudents:boolean = false;
  editModeTeachers:boolean = false;

  cleanFormStudent(){
    this.studentForm = new Student()
  }
  cleanFormTeacher(){
    this.teacherForm = new Teacher()
  }

  // CREATE
  addStudent(){
    this.studentForm.code = this.randomNumber(0,999)
    this.studentsDB.push(this.studentForm)
    this.cleanFormStudent()
  }
  addTeacher(){
    this.teacherForm.code = this.randomNumber(0,999)
    this.teachersDB.push(this.teacherForm)
    this.cleanFormTeacher()
  }
  // READ
  selectStudent(index:number = -1){
    if (index == -1){
      this.studentForm = new Student()
      this.editModeStudents = false;
    }else if (this.editModeStudents && this.studentsDB[index] == this.studentForm) {
      this.editModeStudents = false;
      this.studentForm = new Student()
    }else{
      this.editModeStudents = true;
      this.studentForm = this.studentsDB[index]
    }
  }
  selectTeacher(index:number = -1){
    if (index == -1){
      this.teacherForm = new Teacher()
      this.editModeTeachers = false;
    }else if (this.editModeTeachers && this.teachersDB[index] == this.teacherForm) {
      this.editModeTeachers = false;
      this.teacherForm = new Teacher()
    }else {
      this.editModeTeachers = true;
      this.teacherForm = this.teachersDB[index]
    }
  }

  // UPDATE
  editStudent(index:number){
    this.studentsDB[index] = this.studentForm
    this.cleanFormStudent()
  }
  editTeacher(index:number){
    this.teachersDB[index] = this.teacherForm
  }
  // DELETE
  deleteStudent(){
    this.studentsDB.filter((item, index) => {
      if (item.code == this.studentForm.code){
        this.studentsDB.splice(index,1)
      }
    })
    this.editModeStudents = false;
    this.cleanFormStudent()
  }
  deleteTeacher(){
    this.teachersDB.splice(this.teacherForm.code,1)
    this.editModeTeachers = false;
    this.cleanFormTeacher()
  }

  save(){
    this.database.saveData(this.studentsDB, this.teachersDB)
  }

  load(){
    let DB:{students:Student[], teachers:Teacher[]} = this.database.loadData()
    this.studentsDB = DB.students;
    this.teachersDB = DB.teachers;
  }


  randomNumber(min:number, max:number) {
    return Math.random() * (max - min) + min;
  }
}
