import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  playSound(sound:number):void{
    const audio = new Audio();
    audio.src = '../assets/sounds/'+sound+'.mp3';
    audio.load();
    audio.play();
  }


}
