import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
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

  persons$!:Observable<Person[]>;
  
  constructor(private db:DatabaseService) { }
  persons:Person[] = this.db.persons;
  
  ngOnInit(): void {
    this.persons$ = this.db.getPersons$();
    this.persons$.subscribe( data => this.persons = data)
    
  }

  send(){
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

    this.formPeople.reset();
  }

}
