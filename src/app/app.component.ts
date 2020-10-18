import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
// import { SplashScreen as NativeSplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    //private nativeSplashScreen: NativeSplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      //this.nativeSplashScreen.hide();
      SplashScreen.hide();
    });
  }
}
