import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-cur-mt-rec',
  templateUrl: './cur-mt-rec.component.html',
  styleUrls: ['./cur-mt-rec.component.css']
})
export class CurMtRecComponent implements OnInit {
  dateOpen;
  id;
  type;
  userId;
  curMtRecords = [];
  displayedColumns: string[] = ['dateOpen', 'machId-sensId', 'type', 'userId'];
  dataSource = this.curMtRecords;

  constructor(private  dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCurMtRecords().subscribe((data: any) => {
      this.curMtRecords = data;
    });
  }

}
