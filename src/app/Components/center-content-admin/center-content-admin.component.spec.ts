import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterContentAdminComponent } from './center-content-admin.component';

describe('CenterContentAdminComponent', () => {
  let component: CenterContentAdminComponent;
  let fixture: ComponentFixture<CenterContentAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterContentAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterContentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
