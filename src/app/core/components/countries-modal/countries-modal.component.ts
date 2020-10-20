import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { countries } from '../../static/countries';

@Component({
  selector: 'app-countries-modal',
  templateUrl: './countries-modal.component.html',
  styleUrls: ['./countries-modal.component.scss'],
})
export class CountriesModalComponent implements OnInit {

  countries: any[] = countries;
  public selectedCountry: string = this.navParams.get('selectedCountry');
  isLoaded: boolean;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 0);
  }

  changeSelectedCountry(countryName) {
    this.selectedCountry = countryName;
    this.closeModal();
  }

  async closeModal() {
    await this.modalController.dismiss(this.selectedCountry);
  }

}
