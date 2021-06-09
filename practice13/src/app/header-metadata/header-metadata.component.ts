import { Component, OnInit } from '@angular/core';
import { DataService } from '../providers/data.service';

@Component({
  selector: 'app-header-metadata',
  templateUrl: './header-metadata.component.html',
  styleUrls: ['./header-metadata.component.scss']
})
export class HeaderMetadataComponent implements OnInit {

  public cityForm:string = "";
  public processForm:string = "";
  public dateInitForm:Date = new Date();
  public nameProjectForm:string = "";
  public namePersonForm:string = "";
  public timeInitForm:Date = new Date();
  public timeFinishForm:Date = new Date();

  constructor( private dataService:DataService ) { }

  ngOnInit(): void {
  }


  submitData(){
    this.timeInitForm.set
    this.dataService.data.form.metadata.city = this.cityForm;
    this.dataService.data.form.metadata.process = this.processForm;
    this.dataService.data.form.metadata.dateInit = this.dateInitForm;
    this.dataService.data.form.metadata.nameProject = this.nameProjectForm;
    this.dataService.data.form.metadata.namePerson = this.namePersonForm;
    this.dataService.data.form.metadata.timeInit = this.timeInitForm;
    this.dataService.data.form.metadata.timeFinish = this.timeFinishForm;

    console.log(this.dataService.data.form.metadata);
  }

}
