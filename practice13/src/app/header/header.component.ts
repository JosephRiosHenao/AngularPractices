import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public date:string = "25/05/2021";
  public version:number = 1;
  
  constructor() { }

  ngOnInit(): void {
  }

}
