import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})
export class HomeTabPage implements OnInit {
  featuredServices: {}[];
  categories: {}[];

  constructor() {}

  ngOnInit() {
    this.featuredServices = [
      {
        isVerified: 'true',
        serviceProvider: 'Express Home',
        serviceType: 'Plumbing Service',
      },
      {
        isVerified: 'true',
        serviceProvider: 'Telecom',
        serviceType: 'Internet Service',
      },
      {
        isVerified: 'false',
        serviceProvider: 'Express Cleaning',
        serviceType: 'Cleaning Service',
      },
    ];
    this.categories = [
      {
        name: 'Travel & Transportation',
        description: 'Packer & Mover, Tour & Travel Service',
        icon: 'icon-travel-map',
      },
      {
        name: 'Training & Education',
        description: 'Animal Training Center, Car Driving,Education Institute, Self Motivation Center',
        icon: 'icon-training',
      },
      {
        name: 'Pet Care',
        description: 'Wild Animal Care',
        icon: 'icon-dog',
      },
      {
        name: 'Computer & Mobile Service',
        description: 'Computer & Laptop Repair, Hardware, Software',
        icon: 'icon-computer-repair',
      },
    ];
  }
}
