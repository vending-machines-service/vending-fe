import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-machine-desc',
  templateUrl: './machine-desc.component.html',
  styleUrls: ['./machine-desc.component.css']
})
export class MachineDescComponent implements OnInit {

  machineState;
  productsBoxes;
  sensorsData;

  constructor(public dialogRef: MatDialogRef<MachineDescComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.machineState = this.data.machineState;
    this.productsBoxes = Object.keys(this.data.machineState.productsBoxes);
    this.sensorsData = Object.keys(this.data.machineState.sensorsData);

  }

}
