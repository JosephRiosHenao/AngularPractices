import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Person } from 'src/app/models/person.model';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  formPeople: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    info: new FormControl(''),
  })

  constructor(private db:DatabaseService) { }
  
  persons$!:Observable<Person[]>;
  persons:Person[] = this.db.persons;

  dtOptions:any = {};
  dtTrigger: Subject<any> = new Subject<any>();

  first:boolean = true;
  createMode:boolean = true;
  personModifyIndex:number = 0;
  
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
    this.persons$.subscribe( data => {
      this.persons = data;
      if (this.first){
        this.dtTrigger.next();
        this.first = false
      }
    })
  }

  send(){
    if (this.createMode){
      let data:Person = {
        name: this.formPeople.value.name,
        lastname: this.formPeople.value.lastname,
        state: 0,
        city: this.formPeople.value.city,
        id: "0",
        task: "",
        info: this.formPeople.value.info
      }
      this.db.postPerson(data)
    }else {
      let data:Person = {
        name: this.formPeople.value.name,
        lastname: this.formPeople.value.lastname,
        state: this.persons[this.personModifyIndex].state,
        city: this.formPeople.value.city,
        id: this.persons[this.personModifyIndex].id,
        task: this.persons[this.personModifyIndex].task,
        info: this.formPeople.value.info
      }
      this.db.putPerson(data, this.personModifyIndex)
    }
    this.formPeople.reset();
  }

  deletePerson(id:string, index:number){
    this.db.deletePerson(id, index);
  }

  cancelModify(){
    this.createMode = true;
    this.formPeople.reset();
  }

  modeModifyPerson(id:string, index:number) {
    this.createMode = false;
    this.formPeople.setValue({
      name: this.persons[index].name,
      lastname: this.persons[index].lastname,
      city: this.persons[index].city,
      info: this.persons[index].info
    })
    this.personModifyIndex = index;
    window.scrollTo(0, 0);
  }

}
