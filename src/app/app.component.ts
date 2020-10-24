import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
// import { SplashScreen as NativeSplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Plugins } from '@capacitor/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageApiService } from './core/services/Storage/storage-api.service';
const { SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  direction: string = 'ltr';
  language: string = 'en';

  constructor(
    private platform: Platform,
    //private nativeSplashScreen: NativeSplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private _storageApiService: StorageApiService
  ) {
    this.initializeApp();
  }



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      //this.nativeSplashScreen.hide();
      SplashScreen.hide();
    });
    this.translate.setDefaultLang(this.language);
    this._storageApiService.getGeneralConfig().then(config => {
      if (config && config.language) {
        this.translate.use(config.language);
        this.language = config.language;
        this.direction = config.direction;
      }
    })
  }
}
