import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-arc-mf-rec',
  templateUrl: './arc-mf-rec.component.html',
  styleUrls: ['./arc-mf-rec.component.css']
})
export class ArcMfRecComponent implements OnInit {
  dateOpen;
  id;
  type;
  userId;
  dateClose;
  machineId;
  sensorId;
  arcMfRecords = [];
  displayedColumns: string[] = ['recordId', 'dateOpen', 'dateClose', 'machId', 'sensId', 'type', 'userId'];
  dataSource = this.arcMfRecords;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getArcMfRecords().subscribe((data: any) => {
      this.arcMfRecords = data;
    });
  }

}
