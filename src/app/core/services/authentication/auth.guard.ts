import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageApiService } from '../Storage/storage-api.service';
import { StorageService } from '../Storage/storage.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    public router: Router,
    private _authService: AuthenticationService,
    private _storageApiService: StorageApiService
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve) => {
      this._storageApiService.getGeneralConfig().then(config => {
        if (config && config.language) {
          if (!config.alreadyVisited) {
            this.router.navigate(['/get-started']);
            resolve(false);
          } else {
            if (this._authService.isAuthenticate) {
              resolve(true);
            } else {
              this.router.navigate(['/login']);
              resolve(false);
            }
          }
        } else {
          this.router.navigate(['/language']);
          resolve(false);
        }
      });
    });
  }
}