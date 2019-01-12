import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-mach-avg-prof',
  templateUrl: './mach-avg-prof.component.html',
  styleUrls: ['./mach-avg-prof.component.css']
})
export class MachAvgProfComponent implements OnInit {
  machines = [];

  constructor(public dialogRef: MatDialogRef<MachAvgProfComponent>, private dataService: DataService,
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
