import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDuringWorkComponent } from './form-during-work.component';

describe('FormDuringWorkComponent', () => {
  let component: FormDuringWorkComponent;
  let fixture: ComponentFixture<FormDuringWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDuringWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDuringWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
