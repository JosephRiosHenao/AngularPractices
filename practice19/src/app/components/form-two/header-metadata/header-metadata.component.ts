import { Component, OnInit } from '@angular/core';
import { DataService } from '../providers/data.service';

@Component({
  selector: 'app-header-metadata',
  templateUrl: './header-metadata.component.html',
  styleUrls: ['./header-metadata.component.scss']
})
export class HeaderMetadataComponent implements OnInit {

  public cityForm:string = "";
  public processForm:string = "0";
  public dateInitForm:string = "";
  public nameProjectForm:string = "";
  public namePersonForm:string = "";
  public timeInitForm:string = "";
  public timeFinishForm:string = "";

  constructor( private dataService:DataService ) { }

  ngOnInit(): void {
  }


  submitData(){
    this.dataService.data.form.metadata.city = this.cityForm;
    this.dataService.data.form.metadata.process = this.processForm;
    this.dataService.data.form.metadata.dateInit = this.dateInitForm;
    this.dataService.data.form.metadata.nameProject = this.nameProjectForm;
    this.dataService.data.form.metadata.namePerson = this.namePersonForm;
    this.dataService.data.form.metadata.timeInit = this.timeInitForm;
    this.dataService.data.form.metadata.timeFinish = this.timeFinishForm;

    if (this.cityForm.length > 1 && this.processForm.length > 1 && this.nameProjectForm.length > 1 && this.namePersonForm.length > 1){
      this.dataService.data.form.metadata.confirm = true;
    }
    else{
      this.dataService.data.form.metadata.confirm = false;
    }
  }

}
