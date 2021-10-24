import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSumaMinimaMaximaComponent } from './modal-suma-minima-maxima.component';

describe('ModalSumaMinimaMaximaComponent', () => {
  let component: ModalSumaMinimaMaximaComponent;
  let fixture: ComponentFixture<ModalSumaMinimaMaximaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSumaMinimaMaximaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSumaMinimaMaximaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
