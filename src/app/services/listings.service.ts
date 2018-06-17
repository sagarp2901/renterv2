import { Injectable } from '@angular/core';
import { Listings } from '../models/listings';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  private listings = Listings;

  constructor() { }

  getListings() {
    return this.listings;
  }
}
