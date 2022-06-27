import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterContentProjectComponent } from './center-content-project.component';

describe('CenterContentProjectComponent', () => {
  let component: CenterContentProjectComponent;
  let fixture: ComponentFixture<CenterContentProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterContentProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterContentProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
