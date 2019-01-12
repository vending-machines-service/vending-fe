import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {All} from 'tslint/lib/rules/completedDocsRule';

@Component({
  selector: 'app-all-sold-prod-by-per',
  templateUrl: './all-sold-prod-by-per.component.html',
  styleUrls: ['./all-sold-prod-by-per.component.css']
})
export class AllSoldProdByPerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AllSoldProdByPerComponent>) { }

  ngOnInit() {
  }
  onOkClick() {

  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
