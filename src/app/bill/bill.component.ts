import {Component, OnInit} from '@angular/core';
import {Bill} from "../bill";
import {BillService} from "../bill.service";

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

  bills: Bill[];

  constructor(private billService: BillService) {
  }

  getBills(): void {
    this.bills = this.billService.getBills();
  }

  ngOnInit() {
    this.getBills();
  }

  selectedBill: Bill;

  onSelect(bill: Bill): void {
    this.selectedBill = bill;
  }

}
