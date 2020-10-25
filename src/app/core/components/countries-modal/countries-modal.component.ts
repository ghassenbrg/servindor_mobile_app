import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { countries } from '../../static/countries';

@Component({
  selector: 'app-countries-modal',
  templateUrl: './countries-modal.component.html',
  styleUrls: ['./countries-modal.component.scss'],
})
export class CountriesModalComponent implements OnInit {

  countries: any[] = countries;
  filteredCountries: any[] = [];
  public selectedCountry: any = this.navParams.get('selectedCountry');
  public direction: string = this.navParams.get('direction');
  public language: string = this.navParams.get('language');
  isLoaded: boolean;

  @ViewChild('searchInput', { static: false }) searchInput: { setFocus: () => void; };

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 0);
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.searchInput.setFocus();
    }, 0);
  }

  filter(event) {
    const filterValue: string = event.detail.value ? event.detail.value : '';
    if (filterValue == '') {
      this.filteredCountries = [];
    } else {
      this.filteredCountries = this.countries.filter(country => {
        let wordingFilter = country.wording && country.wording[this.language] ? 
        country.wording[this.language].toLowerCase().startsWith(filterValue.toLowerCase()) : false;
        return country.name.toLowerCase().startsWith(filterValue.toLowerCase()) || wordingFilter;
      });
    }
  }


  changeSelectedCountry(country) {
    this.selectedCountry = country;
    this.closeModal();
  }

  async closeModal() {
    await this.modalController.dismiss(this.selectedCountry);
  }

}
