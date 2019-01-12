import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material';
import {MachAvgProfComponent} from '../statistics/mach-avg-prof/mach-avg-prof.component';
import {IncByPerComponent} from '../statistics/inc-by-per/inc-by-per.component';
import {MonMachProfByPerComponent} from '../statistics/mon-mach-prof-by-per/mon-mach-prof-by-per.component';
import {ProdIncByPerComponent} from '../statistics/prod-inc-by-per/prod-inc-by-per.component';
import {ProfitlessProdByPerComponent} from '../statistics/profitless-prod-by-per/profitless-prod-by-per.component';
import {MostProfProdByPerComponent} from '../statistics/most-prof-prod-by-per/most-prof-prod-by-per.component';
import {SoldProdByPerComponent} from '../statistics/sold-prod-by-per/sold-prod-by-per.component';
import {AllSoldProdByPerComponent} from '../statistics/all-sold-prod-by-per/all-sold-prod-by-per.component';
import {ServiceFrequencyComponent} from '../statistics/service-frequency/service-frequency.component';
import {Router} from '@angular/router';
import {CompleteRecComponent} from '../service/complete-rec/complete-rec.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  menuItems = [];



    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private router: Router, private breakpointObserver: BreakpointObserver, private http: HttpClient,
              public dialog: MatDialog) {}

  ngOnInit() {
    this.http.get('./assets/menu-items.json').subscribe((data: any) => {
      console.log(data);
      this.menuItems = data;
    });
  }
    onMachAvgProf() {
    this.dialog.open(MachAvgProfComponent);
  }
    onIncByPer() {
    this.dialog.open(IncByPerComponent);
    }
    onMonMachProfByPer() {
    this.dialog.open(MonMachProfByPerComponent);
    }
    onProdIncByPer() {
    this.dialog.open(ProdIncByPerComponent);
    }
    onProfitlessProdByPer() {
    this.dialog.open(ProfitlessProdByPerComponent);
    }
    onMostProfProdByPer() {
    this.dialog.open(MostProfProdByPerComponent);
    }
    onSoldProdByPer() {
    this.dialog.open(SoldProdByPerComponent);
    }
    onAllSoldProdByPer() {
    this.dialog.open(AllSoldProdByPerComponent);
    }
    onServFreq() {
    this.dialog.open(ServiceFrequencyComponent);
    }
    onAllCurRec() {
    this.router.navigate(['mainpage/currentrecords']);
    }
    onCurMtRec() {
    this.router.navigate(['mainpage/curmtrec']);
    }
    onCurMfRec() {
    this.router.navigate(['mainpage/curmfrec']);
    }
    onAllArcRec() {
      this.router.navigate(['mainpage/archiverecords']);
    }
    onArcMtRec() {
    this.router.navigate(['mainpage/arcmtrec']);
  }
    onArcMfRec() {
    this.router.navigate(['mainpage/arcmfrec']);
  }
    onCompleteRec() {
    const dialogComplete = this.dialog.open(CompleteRecComponent);
    dialogComplete.afterClosed().subscribe( red => this.router.navigate( ['mainpage/archiverecords']));
    }
}
