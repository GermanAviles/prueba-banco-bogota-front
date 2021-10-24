import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-calcetines',
  templateUrl: './modal-calcetines.component.html',
  styleUrls: ['./modal-calcetines.component.css']
})
export class ModalCalcetinesComponent implements OnInit {

  formCalcetines: FormGroup;
  submitted       = false;
  cargando        = false;
  paresCalcetines = 0;
  listaCalcetines = [];

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(){
    this.formCalcetines = this.formBuilder.group({
      cantidadCalcetines: [null]
    });
  }

  resolverPrueba() {
    if ( this.formCalcetines.invalid ) {
      return;
    }

    this.paresCalcetines = 0;
    this.listaCalcetines = this.generarLista( this.FC.cantidadCalcetines.value );

    const datosUnicos = new Set( this.listaCalcetines );
    const listaLimpia = [...datosUnicos];

    listaLimpia.forEach( (numeroUnicoLista) => {
      const coincidencias = this.listaCalcetines.filter( (number) => number === numeroUnicoLista);
      const sizeArray = coincidencias.length;

      if ( coincidencias.length >= 2 ) {
        this.paresCalcetines += sizeArray % 2 === 0 ? (sizeArray / 2) : (sizeArray - 1) / 2;
      }

    });

  }

  generarLista( cantidadElementos: number ) {
    const velas = [];

    for( let i = 1; i <= cantidadElementos; i++ ) {
      const vela = Math.floor( Math.random() * 100 + 1);
      velas.push( vela );
    }

    return velas;
  }

  get FC() {
    return this.formCalcetines.controls;
  }

}
