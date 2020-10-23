import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-cards-slider',
  templateUrl: './service-cards-slider.component.html',
  styleUrls: ['./service-cards-slider.component.scss'],
})
export class ServiceCardsSliderComponent implements OnInit {

  slideOpts = {
    autoHeight: 150,
    slidesPerView : 1.1,
    centeredSlides: true,
  };

  @Input() services;
  @Input() pager;

  constructor() { }

  ngOnInit() {}

}
