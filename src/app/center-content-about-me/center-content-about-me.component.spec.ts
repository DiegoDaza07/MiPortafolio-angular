import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterContentAboutMeComponent } from './center-content-about-me.component';

describe('CenterContentAboutMeComponent', () => {
  let component: CenterContentAboutMeComponent;
  let fixture: ComponentFixture<CenterContentAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterContentAboutMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterContentAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
