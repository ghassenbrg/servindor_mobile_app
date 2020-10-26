import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServiceCardComponent } from "./service-card/service-card.component";
import { IonicModule } from "@ionic/angular";
import { ServiceCardsSliderComponent } from "./service-cards-slider/service-cards-slider.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SectionTitleComponent } from "./section-title/section-title.component";
import { CategoriesBoxComponent } from './categories-box/categories-box.component';
import { OfficialProviderCardsComponent } from './official-provider-cards/official-provider-cards.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../core/services/i18n/httpLoaderFactory';
import { HttpClient } from '@angular/common/http';
import { SearchResultListComponent } from './search-result-list/search-result-list.component';
import { SearchResultMapComponent } from './search-result-map/search-result-map.component';

@NgModule({
  declarations: [
    ServiceCardComponent,
    ServiceCardsSliderComponent,
    SectionTitleComponent,
    CategoriesBoxComponent,
    OfficialProviderCardsComponent,
    SearchResultListComponent,
    SearchResultMapComponent
  ],
  imports: [
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CommonModule,
    IonicModule,
    FontAwesomeModule],
  exports: [
    ServiceCardComponent,
    ServiceCardsSliderComponent,
    SectionTitleComponent,
    CategoriesBoxComponent,
    OfficialProviderCardsComponent,
    SearchResultListComponent,
    SearchResultMapComponent
  ],
})
export class SharedModule {}
