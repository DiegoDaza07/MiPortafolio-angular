import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterContentEducationComponent } from './center-content-education.component';

describe('CenterContentEducationComponent', () => {
  let component: CenterContentEducationComponent;
  let fixture: ComponentFixture<CenterContentEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterContentEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterContentEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
