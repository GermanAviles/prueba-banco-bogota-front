import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalSumaMinimaMaximaComponent } from './modal-suma-minima-maxima/modal-suma-minima-maxima.component';

@Component({
  selector: 'app-suma-minima-maxima',
  templateUrl: './suma-minima-maxima.component.html',
  styleUrls: ['./suma-minima-maxima.component.css']
})
export class SumaMinimaMaximaComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openModal() {
    this.dialog.open( ModalSumaMinimaMaximaComponent );
  }

}
