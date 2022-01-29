import { Component, OnInit } from '@angular/core';
import { Container, Main } from 'tsparticles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  initDate:Date = new Date(2021,11,1);
  Time:Date = new Date();
  YearMonth:Number[] = [0,0];

  ngOnInit(): void {
    var x = setInterval(() => this.calcTime(),1000);
  }
  counter(i: number) {
    return new Array(i);
}


  calcTime(){
    var date2 = new Date(2021,11,1);
    var date1 = new Date();
    var dateToday = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());

    var diff = (date1.getTime() - date2.getTime());
    var diffToday = (date1.getTime() - dateToday.getTime());

    // var day = 1000 * 60 * 60 * 24;
    // var days = (diff/day);
    // var months = (days/31);
    // var years = (months/12);
    // var hours = (days/24);
    // var minutes = (hours/60);
    // var seconds = (minutes/60);
    // var miliseconds = (diff/1000);


    var miliseconds = Math.trunc(diff/1)
    var milisecondsToday = Math.trunc(diffToday/1)
    var seconds = Math.trunc(miliseconds/1000);
    var secondsToday = Math.trunc(milisecondsToday/1000);
    milisecondsToday -= secondsToday * 1000;
    var minutes = Math.trunc(seconds/60);
    var minutesToday = Math.trunc(secondsToday/60)
    secondsToday -= minutesToday * 60;
    var hours = Math.trunc(minutes/60);
    var hoursToday = Math.trunc(minutesToday/60);
    minutesToday -= hoursToday * 60;
    var days = Math.trunc(hours/24);
    var months = Math.trunc(days/31);
    var years = Math.trunc(months/12);
    if (months > 12) {
      months = months - (years * 12);
    }
    
    var message = date2.toDateString();
    message += " was "
    message += milisecondsToday + " miliseconds "
    message += secondsToday + " seconds "
    message += minutesToday + " minutes "
    message += hoursToday + " hours "
    message += days + " days " 
    message += months + " months "
    message += years + " years ago \n"

    var arrayMiliseconds = milisecondsToday.toString().split('').map(Number)
    var arraySeconds = secondsToday.toString().split('').map(Number)
    var arrayMinutes = minutesToday.toString().split('').map(Number)
    var arrayHours = hoursToday.toString().split('').map(Number)


    console.log(message) 
    this.YearMonth = [years,months];
    this.Time = new Date();;
  }
  
  id = "tsparticles";
    
  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";
  
  /* or the classic JavaScript object */
  particlesOptions:any = {
      background: {
          color: {
              value: "#0d47a1"
          }
      },
      fpsLimit: 60,
      interactivity: {
          events: {
              onClick: {
                  enable: true,
                  mode: "push"
              },
              onHover: {
                  enable: true,
                  mode: "repulse"
              },
              resize: true
          },
          modes: {
              bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40
              },
              push: {
                  quantity: 4
              },
              repulse: {
                  distance: 200,
                  duration: 0.4
              }
          }
      },
      particles: {
          color: {
              value: "#ffffff"
          },
          links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
          },
          collisions: {
              enable: true
          },
          move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false
          },
          number: {
              density: {
                  enable: true,
                  value_area: 800
              },
              value: 80
          },
          opacity: {
              value: 0.5
          },
          shape: {
              type: "circle"
          },
          size: {
              random: true,
              value: 5
          }
      },
      detectRetina: true
  };

  particlesLoaded(container: Container): void {
      console.log(container);
  }
  
  particlesInit(main: Main): void {
      console.log(main);
      
      // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }

}
