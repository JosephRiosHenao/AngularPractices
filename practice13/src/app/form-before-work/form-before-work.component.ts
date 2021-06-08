import { Byte } from '@angular/compiler/src/util';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../providers/data.service';

@Component({
  selector: 'app-form-before-work',
  templateUrl: './form-before-work.component.html',
  styleUrls: ['./form-before-work.component.scss']
})
export class FormBeforeWorkComponent implements OnInit {

  // @Output() form1 = new EventEmitter<number>();

  public form1:number;
  constructor(private data:DataService) {}

  ngOnInit(): void {
  }

  submitData(){
    this.data.setForm1(this.form1);

  }

}
