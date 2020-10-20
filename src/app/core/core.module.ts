import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesModalComponent } from './components/countries-modal/countries-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CountriesModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [CountriesModalComponent]
})
export class CoreModule { }
