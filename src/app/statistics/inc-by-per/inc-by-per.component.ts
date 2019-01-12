import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-inc-by-per',
  templateUrl: './inc-by-per.component.html',
  styleUrls: ['./inc-by-per.component.css']
})
export class IncByPerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<IncByPerComponent>) { }

  ngOnInit() {
  }
  onOkClick() {

  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
