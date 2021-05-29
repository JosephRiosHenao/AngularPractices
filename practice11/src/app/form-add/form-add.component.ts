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

  modeSubmit:boolean = true;
  indexEdit:number = 0;

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
    if (this.modeSubmit) {
      this.persons.push(this.formCreate.value as Person);
    }else {
      this.modeSubmit = true;
      this.submitEdit();
    }
    this.formCreate.reset();
  }

  edit(index:number){
    this.formCreate.setValue({
      name : this.persons[index].name,
      email : this.persons[index].email,
      password : this.persons[index].password,
    });
    this.modeSubmit = false;
    this.indexEdit = index;
  }

  submitEdit(){
    this.persons[this.indexEdit].name = this.formCreate.value.name;
    this.persons[this.indexEdit].email = this.formCreate.value.email;
    this.persons[this.indexEdit].password = this.formCreate.value.password;
  }

  deleteItem(index:number){
    this.persons.splice(index,1);
  }
}
