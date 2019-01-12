import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';



@Component({
  selector: 'app-current-records',
  templateUrl: './current-records.component.html',
  styleUrls: ['./current-records.component.css']
})
export class CurrentRecordsComponent implements OnInit {
  dateOpen;
  id;
  type;
  userId;
  curRecords = [];
  displayedColumns: string[] = ['dateOpen', 'machId-sensId', 'type', 'userId', 'action'];
  dataSource = this.curRecords;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCurRecords().subscribe((data: any) => {
      this.curRecords = data;
    });
    }

}
