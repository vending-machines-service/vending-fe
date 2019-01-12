import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../data.service';

@Component({
  selector: 'app-prod-inc-by-per-res',
  templateUrl: './prod-inc-by-per-res.component.html',
  styleUrls: ['./prod-inc-by-per-res.component.css']
})
export class ProdIncByPerResComponent implements OnInit {

 prodIncByPer;

  constructor(private dataService: DataService) { }

  ngOnInit() {
      }

}
