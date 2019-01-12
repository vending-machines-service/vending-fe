import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-mon-mach-prof-by-per',
  templateUrl: './mon-mach-prof-by-per.component.html',
  styleUrls: ['./mon-mach-prof-by-per.component.css']
})
export class MonMachProfByPerComponent implements OnInit {
  machines = [];

  constructor(public dialogRef: MatDialogRef<MonMachProfByPerComponent>, private dataService: DataService,
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
