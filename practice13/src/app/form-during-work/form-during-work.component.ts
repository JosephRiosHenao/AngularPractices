import { Component, OnInit } from '@angular/core';
import { DataService } from '../providers/data.service';

@Component({
  selector: 'app-form-during-work',
  templateUrl: './form-during-work.component.html',
  styleUrls: ['./form-during-work.component.scss']
})
export class FormDuringWorkComponent implements OnInit {

  public form1:number = 2;
  public form2:number = 2;
  public form3:number = 2;
  public form4:number = 2;
  public form5:number = 2;
  public form6:number = 2;
  public form7:number = 2;

  constructor( private dataService:DataService ) { }

  ngOnInit(): void {
  }


  submitData(){
    this.dataService.data.form.during.form[1] = this.form1;
    this.dataService.data.form.during.form[2] = this.form2;
    this.dataService.data.form.during.form[3] = this.form3;
    this.dataService.data.form.during.form[4] = this.form4;
    this.dataService.data.form.during.form[5] = this.form5;
    this.dataService.data.form.during.form[6] = this.form6;
    this.dataService.data.form.during.form[7] = this.form7;
  }
}
