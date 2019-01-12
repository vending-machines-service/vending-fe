import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-products-modal',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.css']
})
export class ProductsModalComponent implements OnInit {
  productId: number;
  productName: string;
  productPrice: number;
  selectedVal: string;
  available = 'available';
  notAvailable = 'notAvailable';

  constructor(private dataService: DataService,
              public dialogRef: MatDialogRef<ProductsModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onSaveClick() {
    const product = {
      productId: this.productId,
      name: this.productName,
      price: this.productPrice,
     avaliable: this.selectedVal === 'available'
    }
    this.dataService.storeProduct(product).subscribe((res) => {
      console.log(res);
      this.dialogRef.close();
    });
    /*this.dialogRef.close();*/
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
