import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal-velas-cumpleanos',
  templateUrl: './modal-velas-cumpleanos.component.html',
  styleUrls: ['./modal-velas-cumpleanos.component.css']
})
export class ModalVelasCumpleanosComponent implements OnInit {

  formCumpleanos: FormGroup;
  submitted            = false;
  cargando             = false;
  cantidadVelasApagar  = 0;
  velasDeCumpleanos    = [];

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(){
    this.formCumpleanos = this.formBuilder.group({
      edadSobrina: [ null ]
    });
  }

  resolverPrueba() {
    if ( this.formCumpleanos.invalid ) {
      return;
    }

    this.cantidadVelasApagar = 0;
    this.velasDeCumpleanos = this.generarLista( this.FC.edadSobrina.value );

    const velaMasGrande = Math.max( ...this.velasDeCumpleanos );
    this.cantidadVelasApagar = this.velasDeCumpleanos.reduce( (acum, actual) => acum += actual === velaMasGrande ? 1 : 0, 0);
  }

  generarLista( cantidadElementos: number ) {
    const velas = [];

    for( let i = 1; i <= cantidadElementos; i++ ) {
      const vela = Math.floor( Math.random() * cantidadElementos + 1);
      velas.push( vela );
    }

    return velas;
  }

  get FC() {
    return this.formCumpleanos.controls;
  }

}
