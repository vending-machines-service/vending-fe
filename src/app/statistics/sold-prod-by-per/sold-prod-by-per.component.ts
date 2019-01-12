import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DataService} from '../../data.service';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-sold-prod-by-per',
  templateUrl: './sold-prod-by-per.component.html',
  styleUrls: ['./sold-prod-by-per.component.css']
})
export class SoldProdByPerComponent implements OnInit {
  products = [];
  startDate;
  endDate;
  selectedProduct;

  constructor(private dataService: DataService, public dialogRef: MatDialogRef<SoldProdByPerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.dataService.getProducts().subscribe( (data: any) => {this.products = data; });
    }
  onOkClick() {
    const options = {params: new HttpParams().set('from', this.startDate).set('to', this.endDate)};
    this.dataService.soldProdByPer(this.selectedProduct, options).subscribe(res => console.log(res));
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
