import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CountriesModalComponent } from '../../components/countries-modal/countries-modal.component';

@Component({
  selector: 'app-verify-phone-number-screen',
  templateUrl: './verify-phone-number-screen.page.html',
  styleUrls: ['./verify-phone-number-screen.page.scss'],
})
export class VerifyPhoneNumberScreenPage implements OnInit {

  countryPhoneCode: string;
  country: any;
  phoneNumber: string;

  constructor(
    public router: Router,
    public modalController: ModalController,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    if (this.route.snapshot.queryParams.country) {
      this.country = JSON.parse(decodeURI(this.route.snapshot.queryParams.country));
      this.countryPhoneCode = this.country.dial_code;
    }
  }

  doSendCode() {
    this.router.navigate(['/verify-otp'], {queryParams: {countryPhoneCode: encodeURI(this.countryPhoneCode), phoneNumber: this.phoneNumber}});
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: CountriesModalComponent,
      componentProps: {
        selectedCountry: this.country
      }
    })

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.country = dataReturned.data;
        this.countryPhoneCode = dataReturned.data.dial_code;
      }
    });

    return await modal.present();
  }

}
