import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DataService} from '../../data.service';


@Component({
  selector: 'app-prod-edit',
  templateUrl: './prod-edit.component.html',
  styleUrls: ['./prod-edit.component.css']
})
export class ProdEditComponent implements OnInit {

  productId: number;
  productName: string;
  productPrice: number;
  selectedVal: string;
  available = 'available';
  notAvailable = 'notAvailable';


  constructor(private dataService: DataService,
              public dialogRef: MatDialogRef<ProdEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.productId = this.data.product.productId;
    this.productName = this.data.product.name;
    this.productPrice = this.data.product.price;
    }
  onSaveClick() {
    const product = {
      productId: this.productId,
      name: this.productName,
      price: this.productPrice,
      available: this.selectedVal === 'available'
    }
    this.dataService.editProduct(this.productId, product).subscribe((res) => {
      console.log(res);
      this.dialogRef.close();
    });

  }
  onCancelClick() {
    this.dialogRef.close();
  }
}
