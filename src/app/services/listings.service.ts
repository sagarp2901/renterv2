import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IListing } from '../interfaces/listing';
/* import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw'; */

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  private url = 'assets/data/listings.json';

  constructor(private http: HttpClient) { }

  getListings(): Observable<IListing[]> {
    return this.http
      .get<IListing[]>(this.url);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Error');

  }
}
