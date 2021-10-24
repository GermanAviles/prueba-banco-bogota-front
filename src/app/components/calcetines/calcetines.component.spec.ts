import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcetinesComponent } from './calcetines.component';

describe('CalcetinesComponent', () => {
  let component: CalcetinesComponent;
  let fixture: ComponentFixture<CalcetinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcetinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcetinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
