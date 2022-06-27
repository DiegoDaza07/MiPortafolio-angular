import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterContentExperienceComponent } from './center-content-experience.component';

describe('CenterContentExperienceComponent', () => {
  let component: CenterContentExperienceComponent;
  let fixture: ComponentFixture<CenterContentExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterContentExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterContentExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
