import {Injectable} from '@angular/core';
import {Bill} from "./bill";
import {BILLS} from "./mock-bills";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor() {
  }

  getBills(): Observable<Bill[]> {
    return of(BILLS);
  }
}
