import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage implements OnInit {

  loginForm: FormGroup;
  passwordVisibilty: boolean = false;

  constructor(
    public router: Router,
    private _authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  doLogin() {
    if (this.loginForm.valid) {
      this._authService.login(this.loginForm.get('username').value, this.loginForm.get('password').value);
      this.router.navigate(['/']);
    }
  }

  doFacebookLogin() {
    console.log('Facebook Login')
  }

  doGoogleLogin() {
    console.log('Google Login')
  }

  doRegister() {
    this.router.navigate(['/register']);
  }

  doForgotPassword() {
    console.log('Forgot Password')
  }

  changePasswordVisibilty() {
    this.passwordVisibilty = !this.passwordVisibilty;
  }

}
