import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {BillService} from '../bill.service';
import {BillCreation} from "../billCreation";
import {Bill} from "../bill";

@Component({
  selector: 'app-bill-creation',
  templateUrl: './bill-creation.component.html',
  styleUrls: ['./bill-creation.component.css']
})
export class BillCreationComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private billService: BillService,
    private location: Location) {
  }

  ngOnInit() {
  }

  billCreation: BillCreation = new BillCreation();
  bill: Bill;

  goBack(): void {
    this.location.back();
  }

  addBill() {
    this.billService.addBill(this.billCreation).subscribe(
      bill => this.bill = bill
    );
  }
}
