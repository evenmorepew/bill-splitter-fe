import {Component, OnInit} from '@angular/core';
import {Bill} from "../bill";
import {BillService} from "../bill.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bills: Bill[] = [];

  constructor(private billService: BillService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.billService.getBills()
      .subscribe(bills => this.bills = bills.slice(1, 5));
  }
}
