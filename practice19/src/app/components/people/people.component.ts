import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  ngOnInit(): void {
  }

  send(){
    let data:Person = {
      name: this.formPeople.value.name,
      lastname: this.formPeople.value.lasname,
      state: 0,
      city: this.formPeople.value.city,
      id: "0",
      task: "",
      info: this.formPeople.value.info
    }
    this.db.postPerson(data)
  }

}
