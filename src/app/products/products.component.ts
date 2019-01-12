import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ProductsModalComponent} from './products-modal/products-modal.component';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../data.service';
import {ProductDescComponent} from './product-desc/product-desc.component';
import {ProdDelConfComponent} from './prod-del-conf/prod-del-conf.component';
import {ProdEditComponent} from './prod-edit/prod-edit.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];

  constructor(public dialog: MatDialog, private http: HttpClient, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

  onAddProduct() {
    const dialogAdd = this.dialog.open(ProductsModalComponent, {data: {}});
    dialogAdd.afterClosed().subscribe( res => this.dataService.getProducts().subscribe((data: any) => {
      this.products = data;
    }));
  }
  onSelect(productId, name, price, available) {
    this.dialog.open(ProductDescComponent, {data: {productId, name, price, available}});
  }
  onDelete(id) {
    const dialogDel = this.dialog.open(ProdDelConfComponent, {data: {id}});
    dialogDel.afterClosed().subscribe( res => this.dataService.getProducts().subscribe((data: any) => {
      this.products = data;
    }));
  }
  onEdit(product) {
    const dialogEdit = this.dialog.open(ProdEditComponent, {data: {product}});
    dialogEdit.afterClosed().subscribe( res => this.dataService.getProducts().subscribe((data: any) => {
      this.products = data;
    }));
  }
}
