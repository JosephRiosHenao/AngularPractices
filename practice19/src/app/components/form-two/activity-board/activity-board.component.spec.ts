import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityBoardComponent } from './activity-board.component';

describe('ActivityBoardComponent', () => {
  let component: ActivityBoardComponent;
  let fixture: ComponentFixture<ActivityBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
