import { Component, OnInit } from '@angular/core';
import { FormsService } from 'src/app/services/forms.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor(private formSevice:FormsService) { }

  ngOnInit(): void {
  }

  signOut() {
    this.formSevice.signOut();
    
  }

}
