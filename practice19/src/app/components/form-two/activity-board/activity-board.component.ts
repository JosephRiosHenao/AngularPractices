import { Component, OnInit } from '@angular/core';
import { DataService } from '../providers/data.service';

@Component({
  selector: 'app-activity-board',
  templateUrl: './activity-board.component.html',
  styleUrls: ['./activity-board.component.scss']
})
export class ActivityBoardComponent implements OnInit {

  week1:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

  constructor(private dateService:DataService) { }

  ngOnInit(): void {
  }

}
