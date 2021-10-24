import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelasCumpleanosComponent } from './velas-cumpleanos.component';

describe('VelasCumpleanosComponent', () => {
  let component: VelasCumpleanosComponent;
  let fixture: ComponentFixture<VelasCumpleanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VelasCumpleanosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VelasCumpleanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
