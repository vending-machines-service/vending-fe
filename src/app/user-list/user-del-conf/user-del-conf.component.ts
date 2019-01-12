import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DataService} from '../../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-del-conf',
  templateUrl: './user-del-conf.component.html',
  styleUrls: ['./user-del-conf.component.css']
})
export class UserDelConfComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService,
              public dialogRef: MatDialogRef<UserDelConfComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  onYes(id) {
    this.dataService.deleteUser(this.data.id).subscribe(res => {
      this.dialogRef.close();
    });
  }
  onNo() {
  this.dialogRef.close();
  }
}
