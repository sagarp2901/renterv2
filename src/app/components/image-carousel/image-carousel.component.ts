import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit {

  // TODO: These images have to come from model
  images = ['../../../assets/images/house1.jpeg', '../../../assets/images/house2.jpeg', '../../../assets/images/house4.jpeg'];

  constructor() { }

  ngOnInit() {
  }

}
