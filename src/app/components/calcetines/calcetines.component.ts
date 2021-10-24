import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCalcetinesComponent } from './modal-calcetines/modal-calcetines.component';

@Component({
  selector: 'app-calcetines',
  templateUrl: './calcetines.component.html',
  styleUrls: ['./calcetines.component.css']
})
export class CalcetinesComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openModalCalcetines() {
    this.dialog.open( ModalCalcetinesComponent );
  }

}
