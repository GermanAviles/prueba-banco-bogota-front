import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVelasCumpleanosComponent } from './modal-velas-cumpleanos.component';

describe('ModalVelasCumpleanosComponent', () => {
  let component: ModalVelasCumpleanosComponent;
  let fixture: ComponentFixture<ModalVelasCumpleanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalVelasCumpleanosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVelasCumpleanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
