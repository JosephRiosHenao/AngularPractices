import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    let clouds = document.getElementById('clouds');
    let trees = document.getElementById('trees');
    let ground = document.getElementById('ground');
    let text = document.getElementById('text');

    let cloudy = document.getElementById('cloudy');
    let sky = document.getElementById('sky');
    let school = document.getElementById('school');
    let clouds_school = document.getElementById('clouds_school');
    let text_contect = document.getElementById('text_contect');

    let school_section = document.getElementById('school_sectionDIV');

    window. addEventListener('scroll', function() {
      

           
      var valueTop = window.scrollY;
      var valueBottom = school_section!.offsetHeight - school_section!.getBoundingClientRect().top

      clouds!.style.left = -valueTop * 0.5 + 'px';
      trees!.style.top = -valueTop * 0.15 + 'px';
      ground!.style.top = valueTop * 0.15 + 'px';
      text!.style.top = valueTop * 1 + 'px';

      cloudy!.style.top = -valueBottom * 0.02 + 'px';
      sky!.style.top = valueBottom * 0.1 + 'px';
      school!.style.top = valueBottom * 0.005 + 'px';
      clouds_school!.style.left = -valueBottom * 0.7 + 'px';
      // text_contect!.style.top = valueBottom * 1 + 'px';
    })
  }

}
