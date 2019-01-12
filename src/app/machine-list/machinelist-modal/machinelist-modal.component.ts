import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-machinelist-modal',
  templateUrl: './machinelist-modal.component.html',
  styleUrls: ['./machinelist-modal.component.css']
})
export class MachinelistModalComponent implements OnInit {
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

  constructor(private dataService: DataService, public dialogRef: MatDialogRef<MachinelistModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.products = this.data.products;
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
      machineId: this.machineId,
      firmName: this.firmName,
      location: this.location,
      productSensor: productSensor,
    }
    this.dataService.storeMachine(machine).subscribe((res) => {
      console.log(res);
      this.dialogRef.close();
    });
   }

    onCancelClick(){
    this.dialogRef.close();
  }
}
