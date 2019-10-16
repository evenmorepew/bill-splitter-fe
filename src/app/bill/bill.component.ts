import {Component, OnInit} from '@angular/core';
import {Bill} from "../bill";
import {BILLS} from "../mock-bills";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  bill: Bill = {
    name: "Test",
    uuid: "1234"
  };

  bills = BILLS;

  constructor() {
  }

  ngOnInit() {
  }

  selectedBill: Bill;

  onSelect(bill: Bill): void {
    this.selectedBill = bill;
  }

}
