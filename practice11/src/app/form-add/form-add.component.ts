import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Person {
  name:string;
  email:string;
  password:string;
}

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css'],
})
export class FormAddComponent implements OnInit {
  formCreate!: FormGroup;

  persons:Array<Person> = [];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formCreate = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
    });
  }

  submit() {
    this.persons.push(this.formCreate.value as Person);
    this.formCreate.reset();
  }

  edit(index:number){
    this.formCreate.setValue({
      name : this.persons[index].name,
      email : this.persons[index].email,
      password : this.persons[index].password,
    });
  }

  submitEdit(){}
}
