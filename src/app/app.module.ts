import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalcetinesComponent } from './components/calcetines/calcetines.component';
import { SumaMinimaMaximaComponent } from './components/suma-minima-maxima/suma-minima-maxima.component';
import { VelasCumpleanosComponent } from './components/velas-cumpleanos/velas-cumpleanos.component';
import { ModalCalcetinesComponent } from './components/calcetines/modal-calcetines/modal-calcetines.component';
import { ModalSumaMinimaMaximaComponent } from './components/suma-minima-maxima/modal-suma-minima-maxima/modal-suma-minima-maxima.component';
import { ModalVelasCumpleanosComponent } from './components/velas-cumpleanos/modal-velas-cumpleanos/modal-velas-cumpleanos.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcetinesComponent,
    SumaMinimaMaximaComponent,
    VelasCumpleanosComponent,
    ModalCalcetinesComponent,
    ModalSumaMinimaMaximaComponent,
    ModalVelasCumpleanosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
