import {Component, OnInit} from '@angular/core';
import {Bill} from "../bill";
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {BillService} from '../bill.service';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css']
})
export class BillDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private billService: BillService,
    private location: Location) {
  }

  ngOnInit() {
    this.getBill();
  }

  bill: Bill;

  getBill(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.billService.getBill(id)
      .subscribe(bill => this.bill = bill);
  }

  goBack(): void {
    this.location.back();
  }
}
