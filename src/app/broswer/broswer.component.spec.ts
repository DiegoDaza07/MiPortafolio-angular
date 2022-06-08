import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BroswerComponent } from './broswer.component';


describe('BroswerComponent', () => {
  let component: BroswerComponent;
  let fixture: ComponentFixture<BroswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
