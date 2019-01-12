import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.css']
})
export class ProductDescComponent implements OnInit {
  id: number;
  name;
  price;
  available;

  constructor(private dialogRef: MatDialogRef<ProductDescComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.id = this.data.productId;
    this.name = this.data.name;
    this.price = this.data.price;
    this.available = this.data.available ? 'yes' : 'no';
  }

}
