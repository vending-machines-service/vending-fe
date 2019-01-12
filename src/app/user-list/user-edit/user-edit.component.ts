import {Component, Inject, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userId: number;
  userName: string;
  password: string;
  roles = [];

  constructor(private dataService: DataService,
              public dialogRef: MatDialogRef<UserEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.userId = this.data.user.userId;
    this.userName = this.data.user.userName;
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

      this.data.user.roles.forEach(userRole => {
        this.roles.forEach(role => {
          if (role.name === userRole) {
            role.checked = true;
          }
        });
      })
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
    };
    this.dataService.editUser(this.userId, user).subscribe((res) => {
      console.log(res);
      this.dialogRef.close();
    });
  }

}
