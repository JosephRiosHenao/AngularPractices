import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    info: new FormControl('', Validators.required),
  })

  constructor() { }

  ngOnInit(): void {
  }

  send(){

  }

}
