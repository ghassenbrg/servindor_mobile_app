import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CountriesModalComponent } from '../../components/countries-modal/countries-modal.component';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { countries } from '../../static/countries';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.page.html',
  styleUrls: ['./register-screen.page.scss'],
})
export class RegisterScreenPage implements OnInit {

  registerForm: FormGroup;
  passwordVisibilty: boolean = false;
  isError: boolean;
  
  constructor(
    public router: Router,
    private _authService: AuthenticationService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      mail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
  });
  }

  doRegister() {
    if (this.registerForm.valid) {
    //this._authService.login(this.username, this.password);
    this.router.navigate(['/']);
    }
  }

  doFacebookRegister() {
    console.log('Facebook Register')
  }

  doGoogleRegister() {
    console.log('Google Register')
  }

  changePasswordVisibilty() {
    this.passwordVisibilty = !this.passwordVisibilty;
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: CountriesModalComponent,
      componentProps: {
        selectedCountry: this.registerForm.get('country').value
      }
    })

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.registerForm.get('country').setValue(dataReturned.data)
      }
    });

    return await modal.present();
  }

}
