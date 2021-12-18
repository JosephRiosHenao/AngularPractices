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

    window. addEventListener('scroll', function() {
      var value =  window.scrollY - window.innerHeight;

      clouds!.style.left = -value * 0.5 + 'px';
      trees!.style.top = -value * 0.15 + 'px';
      ground!.style.top = value * 0.15 + 'px';
      text!.style.top = value * 1 + 'px';

      cloudy!.style.top = -value * 0.5 + 'px';
    })
  }

}
