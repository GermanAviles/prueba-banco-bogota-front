import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  soloNumerosPresionados( event: any ) {
    const key = event.charCode;
    const valido = (key >= 48 && key <= 57) || key === 13;
    if ( valido === false ){
      event.preventDefault();
    }
  }
}
