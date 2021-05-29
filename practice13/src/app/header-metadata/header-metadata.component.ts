import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-metadata',
  templateUrl: './header-metadata.component.html',
  styleUrls: ['./header-metadata.component.scss']
})
export class HeaderMetadataComponent implements OnInit {

  public dateStart:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
