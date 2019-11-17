import {Injectable} from '@angular/core';
import {Bill} from "./bill";
import {BILLS} from "./mock-bills";

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor() {
  }

  getBills(): Bill[] {
    return BILLS;
  }
}
