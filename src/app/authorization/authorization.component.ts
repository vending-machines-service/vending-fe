import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor(private router: Router) { }

  username: string;
  password: string;

  ngOnInit() {
  }
  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/mainpage/userlist']);
    }   else {
      this.router.navigate(['/mainpage/machinelist']);
    }
     }
}
