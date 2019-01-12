import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DataService} from '../../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-prod-del-conf',
  templateUrl: './prod-del-conf.component.html',
  styleUrls: ['./prod-del-conf.component.css']
})
export class ProdDelConfComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService,
  public dialogRef: MatDialogRef<ProdDelConfComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  onYes(id) {
    this.dataService.deleteProduct(this.data.id).subscribe(res => {
      this.router.navigate(['mainpage/products']);
      this.dialogRef.close();
    });
  }
  onNo() {
    this.dialogRef.close();
  }
}
