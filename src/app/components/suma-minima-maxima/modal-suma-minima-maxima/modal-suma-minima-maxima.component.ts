import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeneralService } from '../../../services/general.service';

@Component({
  selector: 'app-modal-suma-minima-maxima',
  templateUrl: './modal-suma-minima-maxima.component.html',
  styleUrls: ['./modal-suma-minima-maxima.component.css']
})
export class ModalSumaMinimaMaximaComponent implements OnInit {

  formMinMax: FormGroup;
  submitted         = false;
  cargando          = false;
  sumaMinimaMaxima  = {};
  listaNumeros      = [];

  constructor(
    private formBuilder: FormBuilder,
    public generalService: GeneralService
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(){
    this.formMinMax = this.formBuilder.group({
      listSize: [null, Validators.pattern('[0-9]+')  ]
    });
  }

  resolverPrueba() {
    if ( this.formMinMax.invalid ) {
      return;
    }

    this.listaNumeros = this.generarLista( this.FC.listSize.value );

    let sumaMinima = 0;
    let sumaMaxima = 0;

    const minimo = Math.min( ...this.listaNumeros );
    const maximo = Math.max( ...this.listaNumeros );

    sumaMinima = this.listaNumeros.reduce( (acum, actual) => acum += actual !== maximo ? actual : 0, 0);
    sumaMaxima = this.listaNumeros.reduce( (acum, actual) => acum += actual !== minimo ? actual : 0, 0);

    this.sumaMinimaMaxima = { minimo: sumaMinima, maximo: sumaMaxima };
  }

  generarLista( cantidadElementos: number ) {
    const velas = [];

    for( let i = 1; i <= cantidadElementos; i++ ) {
      const vela = Math.floor( Math.random() * 10 + 1);
      velas.push( vela );
    }

    return velas;
  }

  get FC() {
    return this.formMinMax.controls;
  }

}
