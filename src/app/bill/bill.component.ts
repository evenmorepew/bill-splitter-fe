import {Component, OnInit} from '@angular/core';
import {Bill} from "../bill";
import {BillService} from "../bill.service";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  bills: Bill[];

  constructor(private billService: BillService) {
  }

  getBills(): void {
    this.billService.getBills()
      .subscribe(bills => this.bills = bills);
  }

  ngOnInit() {
    this.getBills();
  }

}
