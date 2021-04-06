import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm:FormGroup;
  private isEmail: string | RegExp = '^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$';
  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSave(){
    if(this.contactForm.valid){
      console.log(this.contactForm.value);
    }else{
      console.log('Not Valid');
      console.log(this.contactForm.value);
    }
  }

  isValidField(field:string):string {
    const validateField = this.contactForm.get(field);  
    return (!validateField.valid && validateField.touched)
    ? "is-invalid" : validateField.touched ? "is-valid" : "";
  }

  private initForm():void{
    this.contactForm = this.fb.group({
      name: ['',[Validators.required]],
      lastName: [''],
      email: ['',[Validators.required,Validators.pattern(this.isEmail)]],
      message: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
    })
  }
}
