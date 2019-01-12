import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DataService} from '../../data.service';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-prod-inc-by-per',
  templateUrl: './prod-inc-by-per.component.html',
  styleUrls: ['./prod-inc-by-per.component.css']
})
export class ProdIncByPerComponent implements OnInit {
  products = [];
  startDate;
  endDate;
  selectedProduct;
  dataExist = false;
  results;

  constructor(public dialogRef: MatDialogRef<ProdIncByPerComponent>, private dataService: DataService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.dataService.getProducts().subscribe( (data: any) => {this.products = data; });
  }
  onOkClick() {
    const options = {params: new HttpParams().set('from', this.startDate).set('to', this.endDate)};
    this.dataService.getProdIncByPer(this.selectedProduct, options).subscribe(res => {
      this.results = res;
      this.dataExist = true;
      console.log(res);
    });
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
