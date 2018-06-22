import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../../services/listings.service';
import { IListing } from '../../interfaces/listing';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  public listings: IListing[];

  constructor(private listingsService: ListingsService) { }

  ngOnInit() {
    this.listingsService.getListings().subscribe((data) => {
      this.listings = data;
    });
  }

}
