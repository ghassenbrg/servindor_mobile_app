import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesModalComponent } from './components/countries-modal/countries-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './services/i18n/httpLoaderFactory';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [CountriesModalComponent],
  imports: [
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [CountriesModalComponent]
})
export class CoreModule { }
