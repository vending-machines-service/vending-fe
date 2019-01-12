import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DataService} from '../../data.service';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';




@Component({
  selector: 'app-userlist-modal',
  templateUrl: './userlist-modal.component.html',
  styleUrls: ['./userlist-modal.component.css']
})
export class UserlistModalComponent implements OnInit {

  userId: number;
  userName: string;
  password: string;
  roles = [];

  constructor(private router: Router, private http: HttpClient, private dataService: DataService,
  public dialogRef: MatDialogRef<UserlistModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.roles = [
      {
        name: 'admin',
        checked: false
      },
      {
        name: 'manager',
        checked: false
      },
      {
        name: 'statist',
        checked: false
      },
      {
        name: 'serviceman',
        checked: false
      }
    ];
  }

  onSaveClick() {
    let activeRoles = [];

    this.roles.forEach(role => {
      if (role.checked) {
        activeRoles.push(role.name);
      }
    })
    const user = {
      userId: this.userId,
      userName: this.userName,
      password: this.password,
      roles: activeRoles
    }
    this.dataService.storeUser(user).subscribe((res) => {
        console.log(res);
        this.dialogRef.close();
      }
    );
    /*this.dialogRef.close();*/
    }

  onCancelClick() {
    this.dialogRef.close();
    }
}
