import {Injectable} from '@angular/core';
import {Bill} from "./bill";
import {BILLS} from "./mock-bills";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private messageService: MessageService) {
  }

  getBills(): Observable<Bill[]> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add('BillService: fetched bills');
    return of(BILLS);
  }

  getBill(id: string): Observable<Bill> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`BillService: fetched hero id=${id}`);
    return of(BILLS.find(bill => bill.uuid === id));
  }
}
