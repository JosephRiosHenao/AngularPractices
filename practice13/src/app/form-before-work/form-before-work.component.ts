import { Component, OnInit } from '@angular/core';
import { DataService } from '../providers/data.service';

@Component({
  selector: 'app-form-before-work',
  templateUrl: './form-before-work.component.html',
  styleUrls: ['./form-before-work.component.scss']
})
export class FormBeforeWorkComponent implements OnInit {


  public form1:number = 3;
  public form2:number = 3;
  public form3:number = 3;
  public form4:number = 3;
  public form5:number = 3;
  public form6:number = 3;
  public form7:number = 3;
  public form8:number = 3;
  public form9:number = 3;
  public form10:number = 3;
  public form11:number = 3;

  public contact1Name:string = "";
  public contact1Tel:string = "";
  public contact2Name:string = "";
  public contact2Tel:string = "";

  constructor(private dataService:DataService) {}

  ngOnInit(): void {
  }

  submitData(){
    this.dataService.data.form.before.form[1] = this.form1;
    this.dataService.data.form.before.form[2] = this.form2;
    this.dataService.data.form.before.form[3] = this.form3;
    this.dataService.data.form.before.form[4] = this.form4;
    this.dataService.data.form.before.form[5] = this.form5;
    this.dataService.data.form.before.form[6] = this.form6;
    this.dataService.data.form.before.form[7] = this.form7;
    this.dataService.data.form.before.form[8] = this.form8;
    this.dataService.data.form.before.form[9] = this.form9;
    this.dataService.data.form.before.form[10] = this.form10;
    this.dataService.data.form.before.form[11] = this.form11;

    this.dataService.data.form.before.contacts[0].name = this.contact1Name;
    this.dataService.data.form.before.contacts[0].tel = this.contact1Tel;
    this.dataService.data.form.before.contacts[1].name = this.contact2Name;
    this.dataService.data.form.before.contacts[1].tel = this.contact2Tel;

    if (this.form1 != 3 && this.form2 != 3 && this.form3 != 3 && this.form4 != 3 && this.form5 != 3 && this.form6 != 3 && this.form7 != 3 && this.form8 != 3 && this.form9 != 3 && this.form10 != 3 && this.form11 != 3 && this.contact1Name.length > 1 && this.contact1Tel.length > 7 && this.contact2Name.length > 1 && this.contact2Tel.length > 7){
      this.dataService.data.form.before.confirm = true;
    }
  }

}
