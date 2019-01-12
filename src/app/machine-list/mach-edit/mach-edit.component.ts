import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-mach-edit',
  templateUrl: './mach-edit.component.html',
  styleUrls: ['./mach-edit.component.css']
})
export class MachEditComponent implements OnInit {
  sensorId1 = {
    id: 101,
    productId: ''
  };
  sensorId2 = {
    id: 102,
    productId: ''
  };
  sensorId3 = {
    id: 103,
    productId: ''
  };
  sensorId4 = {
    id: 104,
    productId: ''
  };
  sensorId5 = {
    id: 105,
    productId: ''
  };
  machineId: number;
  firmName: string;
  location: string;
  products = [];

  constructor(private dataService: DataService,
              public dialogRef: MatDialogRef<MachEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.products = this.data.products;
    this.machineId = this.data.machineId;
    this.firmName = this.data.firmName;
    this.location = this.data.location;
  }
  onSaveClick() {
    const productSensor = {
      101: this.sensorId1.productId,
      102: this.sensorId2.productId,
      103: this.sensorId3.productId,
      104: this.sensorId4.productId,
      105: this.sensorId5.productId,
    }
    const machine = {
      machineId: this.data.machineId,
      firmName: this.data.firmName,
      location: this.data.location,
      productSensor: this.data.productSensor,
    }
    this.dataService.editMachine(machine).subscribe((res) => {
      console.log(res);
      this.dialogRef.close();
    });

  }

  onCancelClick(){
    this.dialogRef.close();
  }
}
