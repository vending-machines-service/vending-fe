import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-archive-records',
  templateUrl: './archive-records.component.html',
  styleUrls: ['./archive-records.component.css']
})
export class ArchiveRecordsComponent implements OnInit {
  dateOpen;
  id;
  type;
  userId;
  dateClose;
  machineId;
  sensorId;
  comment;
  arcRecords = [];

  displayedColumns: string[] = ['recordId', 'dateOpen', 'dateClose', 'machId', 'sensId', 'type', 'userId', 'comment'];
  dataSource = this.arcRecords;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getArcRecords().subscribe((data: any) => {
      this.arcRecords = data;
    });
  }

}
