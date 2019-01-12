import { Component, OnInit } from '@angular/core';
import {UserlistModalComponent} from './userlist-modal/userlist-modal.component';
import {MatDialog} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {UserDescComponent} from './user-desc/user-desc.component';
import {DataService} from '../data.service';
import {Router} from '@angular/router';
import {UserDelConfComponent} from './user-del-conf/user-del-conf.component';
import {UserEditComponent} from './user-edit/user-edit.component';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  id;
  users = [];


  constructor(public dialog: MatDialog, private http: HttpClient, private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
   this.dataService.getUsers().subscribe((data: any) => {
     this.users = data;
   });
  }
  onAddUser() {
    const dialogAdd = this.dialog.open(UserlistModalComponent, {data: {}});
    dialogAdd.afterClosed().subscribe(res => this.dataService.getUsers().subscribe((data: any) => {
      this.users = data;
    }));
  }
  onSelect(id, name, roles) {
    this.dialog.open(UserDescComponent, {data: {id, name, roles}});
  }
  onDelete(id) {
    const dialogDel = this.dialog.open(UserDelConfComponent, {data: {id}});
    dialogDel.afterClosed().subscribe(res => this.dataService.getUsers().subscribe((data: any) => {
      this.users = data;
    }));
  }
  onEdit(user) {
    const dialogEdit = this.dialog.open(UserEditComponent, {data: {user}});
    dialogEdit.afterClosed().subscribe(res => this.dataService.getUsers().subscribe((data: any) => {
      this.users = data;
    }));
  }
}
