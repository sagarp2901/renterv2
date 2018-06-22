import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IListing } from '../interfaces/listing';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  private url = 'assets/data/listings.json';

  constructor(private http: HttpClient) { }

  getListings(): Observable<IListing[]> {
    return this.http.get<IListing[]>(this.url);
  }
}
