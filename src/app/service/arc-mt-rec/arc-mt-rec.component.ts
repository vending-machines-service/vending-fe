import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-arc-mt-rec',
  templateUrl: './arc-mt-rec.component.html',
  styleUrls: ['./arc-mt-rec.component.css']
})
export class ArcMtRecComponent implements OnInit {
  dateOpen;
  id;
  type;
  userId;
  dateClose;
  machineId;
  sensorId;
  arcMtRecords = [];
  displayedColumns: string[] = ['recordId', 'dateOpen', 'dateClose', 'machId', 'sensId', 'type', 'userId'];
  dataSource = this.arcMtRecords;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getArcMfRecords().subscribe((data: any) => {
      this.arcMtRecords = data;
    });
  }

}
