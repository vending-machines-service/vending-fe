import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-user-desc',
  templateUrl: './user-desc.component.html',
  styleUrls: ['./user-desc.component.css']
})
export class UserDescComponent implements OnInit {
  id;
  name;
  roles;

  constructor(public dialogRef: MatDialogRef<UserDescComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.id = this.data.id;
    this.name = this.data.name;
    this.roles = this.data.roles;
  }

}
