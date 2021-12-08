import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
    activity: new FormControl('', Validators.required),
  })

  yearsLast:number = 0;


}
