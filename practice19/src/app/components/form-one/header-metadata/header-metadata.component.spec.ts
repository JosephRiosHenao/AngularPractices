import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMetadataComponent } from './header-metadata.component';

describe('HeaderMetadataComponent', () => {
  let component: HeaderMetadataComponent;
  let fixture: ComponentFixture<HeaderMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMetadataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
