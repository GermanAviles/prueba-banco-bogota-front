import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCalcetinesComponent } from './modal-calcetines.component';

describe('ModalCalcetinesComponent', () => {
  let component: ModalCalcetinesComponent;
  let fixture: ComponentFixture<ModalCalcetinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCalcetinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCalcetinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
