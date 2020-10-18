import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-get-started-screen',
  templateUrl: './get-started-screen.page.html',
  styleUrls: ['./get-started-screen.page.scss'],
})
export class GetStartedScreenPage implements OnInit {

  @ViewChild(IonSlides, { static: false }) slides: IonSlides;
  currentSlideIndex: number;
  slidesLength: number;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  

  constructor(public router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.slideDidChange();
  }

  slideDidChange() {
    this.slides.getActiveIndex().then(currentIndex => this.currentSlideIndex = currentIndex); 
    this.slides.length().then(length => this.slidesLength = length)
  };

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

}
