import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {MachinelistModalComponent} from './machinelist-modal/machinelist-modal.component';
import {HttpClient} from '@angular/common/http';
import {MachineDescComponent} from './machine-desc/machine-desc.component';
import {MachEditComponent} from './mach-edit/mach-edit.component';
import {MachDelConfComponent} from './mach-del-conf/mach-del-conf.component';
import {DataService} from '../data.service';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machinelist.component.html',
  styleUrls: ['./machinelist.component.css']
})
export class MachinelistComponent implements OnInit {

  machines = [];
  constructor(private dataService: DataService, public dialog: MatDialog, private http: HttpClient) { }

  ngOnInit() {
    this.dataService.getMachines().subscribe((data: any) => {
      this.machines = data;
    });

  }

  onAddMachine() {
    this.dataService.getProducts().subscribe(products => {
      const dialogAdd = this.dialog.open(MachinelistModalComponent, {data: {products}});
      dialogAdd.afterClosed().subscribe(res => this.dataService.getMachines().subscribe((data: any) => {
        this.machines = data;
      }));
    });

      }
  onSelect(id/*, firmName, location*/){
    this.dataService.getMachineState(id).subscribe(machineState => {
      this.dialog.open(MachineDescComponent, {data: {machineState}});
    });

  }
  onEdit(machine) {
    const dialogEdit = this.dialog.open(MachEditComponent, {data: {machine}});
    dialogEdit.afterClosed().subscribe(res => this.dataService.getMachines().subscribe((data: any) => {
      this.machines = data;
    }));

  }
  onDelete(id) {
    const dialogDel = this.dialog.open(MachDelConfComponent, {data: {id}});
    dialogDel.afterClosed().subscribe(res => this.dataService.getMachines().subscribe((data: any) => {
      this.machines = data;
    }));

  }
}
