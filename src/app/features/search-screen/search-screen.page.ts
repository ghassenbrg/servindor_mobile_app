import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from "@angular/common";
import { AppComponent } from 'src/app/app.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { IonContent, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.page.html',
  styleUrls: ['./search-screen.page.scss'],
  animations: [
    trigger('expandCollapse', [
      state('open', style({
        'height': '*'
      })),
      state('close', style({
        'height': '0'
      })),
      transition('open <=> close', animate(300))
    ])
  ]
})
export class SearchScreenPage implements OnInit {

  isMapMode: boolean;
  filterCurrentState = 'close';
  @ViewChild('searchInput', { static: false }) searchInput: { setFocus: () => void; };
  @ViewChild(IonSlides, { static: false }) slides: IonSlides;
  @ViewChild('content', { static: false }) content: IonContent;
  
  constructor(
    public rootComponent: AppComponent,
    public location: Location
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.searchInput.setFocus();
  }

  switchMode(btnType?: string) {
    if (this.isMapMode && btnType == 'LIST') {
      this.slides.slidePrev();
    } else if (!this.isMapMode && btnType == 'MAP') {
      this.slides.slideNext();
    } else if (btnType == 'SLIDER_EVENT') {
      this.isMapMode = !this.isMapMode;
    }
    this.content.scrollToTop(400);

  }

  changeFilterState() {
    this.filterCurrentState = this.filterCurrentState === 'open' ? 'close' : 'open';
  }

}
