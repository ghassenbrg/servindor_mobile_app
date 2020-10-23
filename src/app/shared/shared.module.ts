import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServiceCardComponent } from "./service-card/service-card.component";
import { IonicModule } from "@ionic/angular";
import { ServiceCardsSliderComponent } from "./service-cards-slider/service-cards-slider.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SectionTitleComponent } from "./section-title/section-title.component";
import { CategoriesBoxComponent } from './categories-box/categories-box.component';

@NgModule({
  declarations: [
    ServiceCardComponent,
    ServiceCardsSliderComponent,
    SectionTitleComponent,
    CategoriesBoxComponent
  ],
  imports: [CommonModule, IonicModule, FontAwesomeModule],
  exports: [
    ServiceCardComponent,
    ServiceCardsSliderComponent,
    SectionTitleComponent,
    CategoriesBoxComponent
  ],
})
export class SharedModule {}
