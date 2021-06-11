import { Component, OnInit } from '@angular/core';
import { DataService } from '../providers/data.service';

@Component({
  selector: 'app-form-after-work',
  templateUrl: './form-after-work.component.html',
  styleUrls: ['./form-after-work.component.scss']
})
export class FormAfterWorkComponent implements OnInit {

  public form1:number = 3;
  public form2:number = 3;
  public form3:number = 3;
  public form4:number = 3;
  public form5:number = 3;
  public form6:number = 3;

  constructor( private dataService:DataService ) { }

  ngOnInit(): void {
  }


  submitData(){
    this.dataService.data.form.after.form[1] = this.form1;
    this.dataService.data.form.after.form[2] = this.form2;
    this.dataService.data.form.after.form[3] = this.form3;
    this.dataService.data.form.after.form[4] = this.form4;
    this.dataService.data.form.after.form[5] = this.form5;
    this.dataService.data.form.after.form[6] = this.form6;

    if (this.form1 != 3 && this.form2 != 3 && this.form3 != 3 && this.form4 != 3 && this.form5 != 3 && this.form6 != 3){
      this.dataService.data.form.after.confirm = true;
    }
  }
}
