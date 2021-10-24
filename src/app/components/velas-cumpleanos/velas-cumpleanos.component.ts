import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalVelasCumpleanosComponent } from './modal-velas-cumpleanos/modal-velas-cumpleanos.component';

@Component({
  selector: 'app-velas-cumpleanos',
  templateUrl: './velas-cumpleanos.component.html',
  styleUrls: ['./velas-cumpleanos.component.css']
})
export class VelasCumpleanosComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openModal() {
    this.dialog.open( ModalVelasCumpleanosComponent );
  }

}
