import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private httpClient:HttpClient) { }

  saveData(data:Student[]){
    this.httpClient.put('https://practice1-ab55e-default-rtdb.firebaseio.com/practice27/students.json', data).subscribe(data => console.log(data) )
  }



  loadData():Student[]{
    var newData:Student[] = []
    this.httpClient.get<any>('https://practice1-ab55e-default-rtdb.firebaseio.com/practice27/students.json').subscribe(
    data => data.forEach(
      (element: Student) => newData.push(element)
    ))
    return newData;
  }
}
