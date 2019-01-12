import {Component, Inject, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-complete-rec',
  templateUrl: './complete-rec.component.html',
  styleUrls: ['./complete-rec.component.css']
})
export class CompleteRecComponent implements OnInit {
  machines = [];
  users = [];
  comment;
  machineId;
  userId;

  constructor(public dialogRef: MatDialogRef<CompleteRecComponent>, private dataService: DataService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.dataService.getMachines().subscribe( (machineData: any) => {this.machines = machineData; });
    this.dataService.getUsers().subscribe( (userData: any) => {this.users = userData; });
  }
  onOkClick() {
    const completedRec = {
      machineId: this.machineId,
      userId: this.userId,
      comment: this.comment
    }
  this.dataService.completeRecord(completedRec).subscribe( res => {
    this.dialogRef.close();
  });
  }

  onCancelClick() {
    this.dialogRef.close();
  }

}
