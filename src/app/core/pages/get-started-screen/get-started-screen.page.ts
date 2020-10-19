import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { GeneralConfig } from '../../models/generalConfig.model';
import { StorageApiService } from '../../services/Storage/storage-api.service';

@Component({
  selector: 'app-get-started-screen',
  templateUrl: './get-started-screen.page.html',
  styleUrls: ['./get-started-screen.page.scss'],
})
export class GetStartedScreenPage implements OnInit {

  generalConfig: GeneralConfig;

  @ViewChild(IonSlides, { static: false }) slides: IonSlides;
  currentSlideIndex: number;
  slidesLength: number;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoHeight: false
  };
  

  constructor(
    public router: Router,
    private _storageApiService: StorageApiService
    ) { }

  ngOnInit() {
    this._storageApiService.getGeneralConfig().then(config => {
      if (config) {
        this.generalConfig = config;
      } else {
        this.generalConfig = new GeneralConfig;
      }
    })
  }

  ngAfterViewInit() {
    this.slideDidChange();
  }

  slideDidChange() {
    this.slides.getActiveIndex().then(currentIndex => this.currentSlideIndex = currentIndex); 
    this.slides.length().then(length => this.slidesLength = length)
  };

  doGetStarted() {
    this.generalConfig.alreadyVisited = true;
    this._storageApiService.setGeneralConfig(this.generalConfig).then(res => {
      this.router.navigate(['/']);
    });
  }

}
