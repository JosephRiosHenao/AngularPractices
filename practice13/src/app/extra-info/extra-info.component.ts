import { Component, OnInit } from '@angular/core';
import { DataService } from '../providers/data.service';

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.scss']
})
export class ExtraInfoComponent implements OnInit {

  public observation:string = "";
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }


  submitData(){
    this.dataService.data.form.info.observation = this.observation;
  }

  
}
