import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-cards-slider',
  templateUrl: './service-cards-slider.component.html',
  styleUrls: ['./service-cards-slider.component.scss'],
})
export class ServiceCardsSliderComponent implements OnInit {

  slideOpts = {
    slidesPerView : 1.1,
    centeredSlides: true,
  };

  @Input() services;
  @Input() pager;
  @Input() direction: string = 'ltr';
  
  constructor() { }

  ngOnInit() {}

}
