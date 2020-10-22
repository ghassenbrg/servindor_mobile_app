import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verify-otp-screen',
  templateUrl: './verify-otp-screen.page.html',
  styleUrls: ['./verify-otp-screen.page.scss'],
})
export class VerifyOtpScreenPage implements OnInit {

  codeForm: FormGroup;
  @ViewChild('input_dig_1', { static: false }) input_dig_1: { setFocus: () => void; };
  @ViewChild('input_dig_2', { static: false }) input_dig_2: { setFocus: () => void; };
  @ViewChild('input_dig_3', { static: false }) input_dig_3: { setFocus: () => void; };
  @ViewChild('input_dig_4', { static: false }) input_dig_4: { setFocus: () => void; };
  @ViewChild('input_dig_5', { static: false }) input_dig_5: { setFocus: () => void; };

  digBackUp: any[] = [null, null, null, null, null];
  countryPhoneCode: string;
  phoneNumber: string;

  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.queryParams.countryPhoneCode && this.route.snapshot.queryParams.phoneNumber) {
      this.countryPhoneCode = decodeURI(this.route.snapshot.queryParams.countryPhoneCode);
      this.phoneNumber = this.route.snapshot.queryParams.phoneNumber;
    }
    this.codeForm = new FormGroup({
      dig_1: new FormControl(null, Validators.required),
      dig_2: new FormControl(null, Validators.required),
      dig_3: new FormControl(null, Validators.required),
      dig_4: new FormControl(null, Validators.required),
      dig_5: new FormControl(null, Validators.required)
    });
  }
  keypressedCodeDig(event, inputIndex: number) {
    this.digBackUp[inputIndex - 1] = event && event.detail ? event.detail.data : null;
  }

  changeCodeDig(event, inputIndex: number) {
    this.codeForm.get('dig_' + inputIndex).setValue(this.digBackUp[inputIndex - 1]);
    if (this.digBackUp[inputIndex - 1]) {
      switch (inputIndex) {
        case 1:
          this.input_dig_2.setFocus();
          break;
        case 2:
          this.input_dig_3.setFocus();
          break;
        case 3:
          this.input_dig_4.setFocus();
          break;
        case 4:
          this.input_dig_5.setFocus();
          break;
        default:
          break;
      }
    } else {
      switch (inputIndex) {
        case 2:
          this.input_dig_1.setFocus();
          break;
        case 3:
          this.input_dig_2.setFocus();
          break;
        case 4:
          this.input_dig_3.setFocus();
          break;
        case 5:
          this.input_dig_4.setFocus();
          break;
        default:
          break;
      }
    }
  }

  doConfirm() {
    this.router.navigate(['/']);
  }

  doResend() {
    this.router.navigate(['/']);
  }

}
