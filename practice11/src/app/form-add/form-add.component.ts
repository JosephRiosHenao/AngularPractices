import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css'],
})
export class FormAddComponent implements OnInit {
  formCreate!: FormGroup;
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
    console.log(this.formCreate.value);
    console.log(this.formCreate.valid);
    console.log(this.formCreate.controls.name.valid);
  }
}
