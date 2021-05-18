import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  public name:string = "";


  constructor( private pathBrowser:ActivatedRoute ) { }

  ngOnInit(): void {

    this.name = this.pathBrowser.snapshot.params.name;
  }

}
