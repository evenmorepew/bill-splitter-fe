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
    this.messageService.add('BillService: fetched bills');
    return of(BILLS);
  }
}
