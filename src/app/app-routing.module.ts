import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BillComponent} from "./bill/bill.component";
import {DashboardComponent} from './dashboard/dashboard.component';
import {BillDetailComponent} from "./bill-detail/bill-detail.component";
import {BillCreationComponent} from "./bill-creation/bill-creation.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'heroes', component: BillComponent},
  {path: 'detail/:id', component: BillDetailComponent},
  {path: 'create', component: BillCreationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
