import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAfterWorkComponent } from './form-after-work.component';

describe('FormAfterWorkComponent', () => {
  let component: FormAfterWorkComponent;
  let fixture: ComponentFixture<FormAfterWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAfterWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAfterWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
