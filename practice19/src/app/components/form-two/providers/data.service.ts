import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormsService } from 'src/app/services/forms.service';
import { Template } from './data.service.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data:Template;
  confirmHeader:boolean = false;

  constructor(public formService:FormsService) {
    this.data = this.formService.data;
  }
}
