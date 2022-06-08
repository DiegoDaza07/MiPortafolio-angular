import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpContentComponent } from './up-content.component';

describe('UpContentComponent', () => {
  let component: UpContentComponent;
  let fixture: ComponentFixture<UpContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
