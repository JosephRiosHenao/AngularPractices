import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { Teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private httpClient:HttpClient) { }

  saveData(dataStudents:Student[], dataTeachers:Teacher[]){
    let data:modelDB = {students:dataStudents, teachers:dataTeachers}
    this.httpClient.put('https://practice1-ab55e-default-rtdb.firebaseio.com/practice27.json', data).subscribe(data => console.log(data) )
  }



  loadData():modelDB{
    var newData:modelDB = {students:[], teachers:[]}
    this.httpClient.get<modelDB>('https://practice1-ab55e-default-rtdb.firebaseio.com/practice27.json').subscribe(
    data => {
      data.students.forEach(
        (element: Student) => newData.students.push(element)
      )
      data.teachers.forEach(
        (element: Teacher) => newData.teachers.push(element)
      )
    })
    return newData;
  }
}

export class modelDB {
  students!:Student[];
  teachers!: Teacher[];
}
