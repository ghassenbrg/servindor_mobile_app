import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticate = false;

  constructor() { }

  login(user: string, password: string): boolean {
    if (user === 'admin' && password === 'admin') {
      this.isAuthenticate = true;
      return this.isAuthenticate;
    }
    this.isAuthenticate = false;
    return this.isAuthenticate;
  }
}
