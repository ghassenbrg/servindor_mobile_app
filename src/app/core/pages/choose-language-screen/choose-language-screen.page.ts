import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralConfig } from '../../models/generalConfig.model';
import { StorageApiService } from '../../services/Storage/storage-api.service';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-choose-language-screen',
  templateUrl: './choose-language-screen.page.html',
  styleUrls: ['./choose-language-screen.page.scss'],
})
export class ChooseLanguageScreenPage implements OnInit {
  public language: string;

  generalConfig: GeneralConfig;

  languages = [
    { value: 'en', label: 'English', icon: 'gb', direction: 'ltr' },
    { value: 'fr', label: 'Français', icon: 'fr', direction: 'ltr' },
    { value: 'ar', label: 'عربيّة', icon: 'sa', direction: 'rtl' },
    { value: 'tn', label: 'تونسي', icon: 'tn', direction: 'rtl' }
  ];
  selectedLanguage: any = { value: 'en', label: 'English', icon: 'gb', direction: 'ltr' };
  next: string;

  constructor(
    public router: Router,
    private _storageApiService: StorageApiService,
    private translate: TranslateService,
    private rootComponent: AppComponent
  ) { }

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this._storageApiService.getGeneralConfig().then(config => {
      if (config) {
        this.generalConfig = config;
        if (config.language) {
          this.translate.use(config.language);
          this.rootComponent.direction = config.direction;
        }
      } else {
        this.generalConfig = new GeneralConfig;
      }
    })
  }

  onSelectLanguage(language) {
    this.selectedLanguage = language;
    this.translate.use(this.selectedLanguage.value);
  }

  doConfirm() {
    this.generalConfig.language = this.selectedLanguage.value;
    this.generalConfig.direction = this.selectedLanguage.direction;
    this.rootComponent.direction = this.selectedLanguage.direction;
    this._storageApiService.setGeneralConfig(this.generalConfig).then(res => {
      this.router.navigate(['/']);
    });
  }


}
