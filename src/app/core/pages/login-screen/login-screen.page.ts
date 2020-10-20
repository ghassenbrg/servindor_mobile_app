import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage implements OnInit {

  username: string;
  password: string;

  constructor(
    public router: Router,
    private _authService: AuthenticationService
    ) { }

  ngOnInit() {
  }

  doLogin() {
    this._authService.login(this.username, this.password);
    this.router.navigate(['/']);
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

}
