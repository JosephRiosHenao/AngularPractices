import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public activities:string[] = ["test"];

  public formWork:FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    yearsOld: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    tel: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
  });

  public formSon:FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    yearsOld: new FormControl('', Validators.required),
    activity1: new FormControl('', Validators.required),
    activity2: new FormControl('', Validators.required),
    activity3: new FormControl('', Validators.required),
  })

  a(){
    this.formSon.controls["name"].value
  }

  yearsLast:number = 0;


}
