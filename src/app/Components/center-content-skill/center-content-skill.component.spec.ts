import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterContentSkillComponent } from './center-content-skill.component';

describe('CenterContentSkillComponent', () => {
  let component: CenterContentSkillComponent;
  let fixture: ComponentFixture<CenterContentSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterContentSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterContentSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
