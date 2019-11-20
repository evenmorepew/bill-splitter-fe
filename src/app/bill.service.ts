import {Injectable} from '@angular/core';
import {Bill} from "./bill";
import {BILLS} from "./mock-bills";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from "rxjs/operators";
import {BillCreation} from "./billCreation";

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  private billsUrl = 'http://localhost:8080/api/bill';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  addBill(billCreation: BillCreation): Observable<Bill> {
    this.log('add bill');
    return this.http.post(this.billsUrl, billCreation, this.httpOptions).pipe(
      tap(_ => this.log(`add bill name=${billCreation.name}`)),
      catchError(this.handleError<any>('add bill'))
    )
  }

  getBills(): Observable<Bill[]> {
    this.log('fetched bills');
    return of(BILLS);
  }

  private log(message: string) {
    this.messageService.add(`BillService: ${message}`);
  }

  getBill(id: string): Observable<Bill> {
    this.log(`fetched hero id=${id}`);
    return of(BILLS.find(bill => bill.uuid === id));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
