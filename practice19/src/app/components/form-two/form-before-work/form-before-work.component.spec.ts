import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBeforeWorkComponent } from './form-before-work.component';

describe('FormBeforeWorkComponent', () => {
  let component: FormBeforeWorkComponent;
  let fixture: ComponentFixture<FormBeforeWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBeforeWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBeforeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
