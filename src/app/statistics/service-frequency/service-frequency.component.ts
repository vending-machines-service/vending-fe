import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-service-frequency',
  templateUrl: './service-frequency.component.html',
  styleUrls: ['./service-frequency.component.css']
})
export class ServiceFrequencyComponent implements OnInit {
  machines = [];

  constructor(public dialogRef: MatDialogRef<ServiceFrequencyComponent>, private dataService: DataService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.dataService.getMachines().subscribe( (data: any) => {this.machines = data; });
  }
  onOkClick() {

  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
