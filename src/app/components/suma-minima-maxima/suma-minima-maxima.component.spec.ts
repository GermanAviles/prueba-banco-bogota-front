import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumaMinimaMaximaComponent } from './suma-minima-maxima.component';

describe('SumaMinimaMaximaComponent', () => {
  let component: SumaMinimaMaximaComponent;
  let fixture: ComponentFixture<SumaMinimaMaximaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumaMinimaMaximaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumaMinimaMaximaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
