import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../../services/listings.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  public listings = [];

  constructor(private listingsService: ListingsService) { }


  ngOnInit() {
    this.listings = this.listingsService.getListings();
  }

}
