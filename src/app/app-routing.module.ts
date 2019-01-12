import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserlistComponent} from './user-list/userlist.component';
import {MachinelistComponent} from './machine-list/machinelist.component';
import {AuthorizationComponent} from './authorization/authorization.component';
import {NavigationComponent} from './navigation/navigation.component';
import {ProductsComponent} from './products/products.component';
import {ServiceComponent} from './service/service.component';
import {CurrentRecordsComponent} from './service/current-records/current-records.component';
import {ArchiveRecordsComponent} from './service/archive-records/archive-records.component';
import {ArcMtRecComponent} from './service/arc-mt-rec/arc-mt-rec.component';
import {ArcMfRecComponent} from './service/arc-mf-rec/arc-mf-rec.component';
import {CurMtRecComponent} from './service/cur-mt-rec/cur-mt-rec.component';
import {CurMfRecComponent} from './service/cur-mf-rec/cur-mf-rec.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthorizationComponent },
  { path: 'mainpage', component: NavigationComponent, children: [
      { path: '', redirectTo: 'userlist', pathMatch: 'full' },
      { path: 'machinelist', component: MachinelistComponent, },
      { path: 'userlist', component: UserlistComponent },
      { path: 'products', component: ProductsComponent },
      /*{ path: 'service', component: ServiceComponent }*/
      { path: 'currentrecords', component: CurrentRecordsComponent },
      { path: 'archiverecords', component: ArchiveRecordsComponent },
      { path: 'arcmtrec', component: ArcMtRecComponent },
      { path: 'arcmfrec', component: ArcMfRecComponent },
      { path: 'curmtrec', component: CurMtRecComponent },
      { path: 'curmfrec', component: CurMfRecComponent },

    ] },
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
