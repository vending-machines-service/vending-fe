import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatMenuModule,
  MatDialogModule,
  MAT_LABEL_GLOBAL_OPTIONS,
  MatPaginatorModule,
  MatDatepickerModule,
  MatNativeDateModule, MatCheckboxModule, MatRadioModule, MatTableModule,
} from '@angular/material';
import { UserlistComponent } from './user-list/userlist.component';
import {AppRoutingModule} from './app-routing.module';

import { AuthorizationComponent } from './authorization/authorization.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StatisticsComponent } from './statistics/statistics.component';
import { ProductsComponent } from './products/products.component';
import { UserlistModalComponent } from './user-list/userlist-modal/userlist-modal.component';
import { MatFormFieldModule} from '@angular/material/form-field'
import { MachinelistModalComponent} from './machine-list/machinelist-modal/machinelist-modal.component';
import { MachinelistComponent} from './machine-list/machinelist.component';
import { ProductsModalComponent } from './products/products-modal/products-modal.component';
import { MachAvgProfComponent } from './statistics/mach-avg-prof/mach-avg-prof.component';
import { HttpClientModule} from '@angular/common/http';
import { IncByPerComponent } from './statistics/inc-by-per/inc-by-per.component';
import { MonMachProfByPerComponent } from './statistics/mon-mach-prof-by-per/mon-mach-prof-by-per.component';
import { ProdIncByPerComponent } from './statistics/prod-inc-by-per/prod-inc-by-per.component';
import { ProfitlessProdByPerComponent } from './statistics/profitless-prod-by-per/profitless-prod-by-per.component';
import { MostProfProdByPerComponent } from './statistics/most-prof-prod-by-per/most-prof-prod-by-per.component';
import { SoldProdByPerComponent } from './statistics/sold-prod-by-per/sold-prod-by-per.component';
import { AllSoldProdByPerComponent } from './statistics/all-sold-prod-by-per/all-sold-prod-by-per.component';
import { UserDescComponent } from './user-list/user-desc/user-desc.component';
import { MachineDescComponent } from './machine-list/machine-desc/machine-desc.component';
import { ServiceFrequencyComponent } from './statistics/service-frequency/service-frequency.component';
import {DataService} from './data.service';
import { ProductDescComponent } from './products/product-desc/product-desc.component';
import {UserDelConfComponent} from './user-list/user-del-conf/user-del-conf.component';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';
import { ProdDelConfComponent } from './products/prod-del-conf/prod-del-conf.component';
import { ProdEditComponent } from './products/prod-edit/prod-edit.component';
import { MachDelConfComponent } from './machine-list/mach-del-conf/mach-del-conf.component';
import { MachEditComponent } from './machine-list/mach-edit/mach-edit.component';
import { ServiceComponent } from './service/service.component';
import { CurrentRecordsComponent } from './service/current-records/current-records.component';
import { ArchiveRecordsComponent } from './service/archive-records/archive-records.component';
import { CurMtRecComponent } from './service/cur-mt-rec/cur-mt-rec.component';
import { CurMfRecComponent } from './service/cur-mf-rec/cur-mf-rec.component';
import { ArcMfRecComponent } from './service/arc-mf-rec/arc-mf-rec.component';
import { ArcMtRecComponent } from './service/arc-mt-rec/arc-mt-rec.component';
import { CompleteRecComponent } from './service/complete-rec/complete-rec.component';
import { ProdIncByPerResComponent } from './statistics/prod-inc-by-per/prod-inc-by-per-res/prod-inc-by-per-res.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserlistComponent,
    MachinelistModalComponent,
    AuthorizationComponent,
    StatisticsComponent,
    ProductsComponent,
    UserlistModalComponent,
    MachinelistComponent,
    ProductsModalComponent,
    MachAvgProfComponent,
    IncByPerComponent,
    MonMachProfByPerComponent,
    ProdIncByPerComponent,
    ProfitlessProdByPerComponent,
    MostProfProdByPerComponent,
    SoldProdByPerComponent,
    AllSoldProdByPerComponent,
    UserDescComponent,
    MachineDescComponent,
    ServiceFrequencyComponent,
    ProductDescComponent,
    UserDelConfComponent,
    UserEditComponent,
    ProdDelConfComponent,
    ProdEditComponent,
    MachDelConfComponent,
    MachEditComponent,
    ServiceComponent,
    CurrentRecordsComponent,
    ArchiveRecordsComponent,
    CurMtRecComponent,
    CurMfRecComponent,
    ArcMfRecComponent,
    ArcMtRecComponent,
    CompleteRecComponent,
    ProdIncByPerResComponent

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    AppRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule
  ],

  entryComponents: [UserlistModalComponent, MachinelistModalComponent, ProductsModalComponent,
  MachAvgProfComponent, IncByPerComponent, MonMachProfByPerComponent, ProdIncByPerComponent,
  ProfitlessProdByPerComponent, MostProfProdByPerComponent, SoldProdByPerComponent, AllSoldProdByPerComponent,
  UserDescComponent, MachineDescComponent, ServiceFrequencyComponent, UserDelConfComponent, UserEditComponent,
  ProdDelConfComponent, ProdEditComponent, ProductDescComponent, MachDelConfComponent, MachEditComponent, CompleteRecComponent],

  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}},
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
