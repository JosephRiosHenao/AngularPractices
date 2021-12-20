import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  valueOffsetScroll:number = 0;
  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    let clouds = document.getElementById('clouds');
    let trees = document.getElementById('trees');
    let ground = document.getElementById('ground');
    let text = document.getElementById('text');
    let cloudy_homeTOP = document.getElementById('cloudy_homeTOP');

    let cloudy = document.getElementById('cloudy');
    let cloudy_ground = document.getElementById('cloudy_ground');
    let sky = document.getElementById('sky');
    let school = document.getElementById('school');
    let clouds_school = document.getElementById('clouds_school');
    let text_contect = document.getElementById('text_contect');

    let school_section = document.getElementById('school_sectionDIV');
    let home_section = document.getElementById('home_sectionDIV');
    let valueOffsetScroll = this.valueOffsetScroll;

    window. addEventListener('scroll', function() {
      

           
      var valueSchool = window.scrollY;
      // var valueSchool = school_section!.offsetHeight - school_section!.getBoundingClientRect().top
      var valueHome = (window.innerHeight*3) - window.scrollY;
      // var valueHome = home_section!.offsetHeight - home_section!.getBoundingClientRect().top;


      clouds!.style.left = -valueHome * 0.5 + 'px';
      trees!.style.top = -valueHome * 0.15 + 'px';
      ground!.style.top = valueHome * 0.15 + 'px';
      text!.style.top = valueHome * 1 + 'px';
      cloudy_homeTOP!.style.top = -valueHome * 0.5 + 'px';

      cloudy!.style.top = -valueSchool * 0.02 + 'px';
      cloudy_ground!.style.bottom = valueSchool * 1.15 + 'px';
      sky!.style.top = valueSchool * 0.1 + 'px';
      school!.style.top = valueSchool * 0.005 + 'px';
      clouds_school!.style.left = -valueSchool * 0.5 + 'px';

      // text_contect!.style.top = valueSchool * 1 + 'px';
    })
  }

}
