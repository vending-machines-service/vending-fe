import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DataService} from '../../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mach-del-conf',
  templateUrl: './mach-del-conf.component.html',
  styleUrls: ['./mach-del-conf.component.css']
})
export class MachDelConfComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService,
              public dialogRef: MatDialogRef<MachDelConfComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  onYes(id) {
    this.dataService.deleteMachine(this.data.id).subscribe(res => {
      this.dialogRef.close();
    });
  }

  onNo() {
    this.dialogRef.close();
  }
}
