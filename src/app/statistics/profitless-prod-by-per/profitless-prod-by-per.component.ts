import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {HttpParams} from '@angular/common/http';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-profitless-prod-by-per',
  templateUrl: './profitless-prod-by-per.component.html',
  styleUrls: ['./profitless-prod-by-per.component.css']
})
export class ProfitlessProdByPerComponent implements OnInit {
  startDate;
  endDate;

  constructor(public dialogRef: MatDialogRef<ProfitlessProdByPerComponent>, private dataService: DataService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  onOkClick() {
    const options = {params: new HttpParams().set('from', this.startDate).set('to', this.endDate)};
    this.dataService.profitlessProdByPer(options).subscribe(res => console.log(res));
  }

  onCancelClick() {
    this.dialogRef.close();
  }
  addStartDate(event){
    let day = '' + event.value.getDate();
    let month = '' + event.value.getMonth() + 1;
    const year = event.value.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    this.startDate = year +'-'+ month +'-'+ day;
    console.log('date start', this.startDate);

  }
  addEndDate(event){
    let day = '' + event.value.getDate();
    let month = '' + event.value.getMonth() + 1;
    const year = event.value.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    this.endDate = year +'-'+ month +'-'+ day;
    console.log('this.endDate', this.endDate);
  }
}
