import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-cur-mf-rec',
  templateUrl: './cur-mf-rec.component.html',
  styleUrls: ['./cur-mf-rec.component.css']
})
export class CurMfRecComponent implements OnInit {
  dateOpen;
  id;
  type;
  userId;
  curMfRecords = [];
  displayedColumns: string[] = ['dateOpen', 'machId-sensId', 'type', 'userId'];
  dataSource = this.curMfRecords;

  constructor(private  dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCurMfRecords().subscribe((data: any) => {
      this.curMfRecords = data;
    });
  }

}
