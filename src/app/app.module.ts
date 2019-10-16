import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BillComponent} from './bill/bill.component';
import {FormsModule} from '@angular/forms';
import {BillDetailComponent} from './bill-detail/bill-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BillComponent,
    BillDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
