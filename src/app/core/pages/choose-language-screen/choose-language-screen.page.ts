import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralConfig } from '../../models/generalConfig.model';
import { StorageApiService } from '../../services/Storage/storage-api.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-choose-language-screen',
  templateUrl: './choose-language-screen.page.html',
  styleUrls: ['./choose-language-screen.page.scss'],
})
export class ChooseLanguageScreenPage implements OnInit {
  public language: string;

  generalConfig: GeneralConfig;

  languages = [
    { value: 'en', label: 'English', icon:'gb' },
    { value: 'fr', label: 'Français', icon:'fr' },
    { value: 'ar', label: 'عربيّة', icon:'sa' },
    { value: 'tn', label: 'Tounsi', icon:'tn' }
  ];
  selectedLanguage: string = 'en';
  next: string;

  constructor(
    public router: Router,
    private _storageApiService: StorageApiService,
    private translate: TranslateService
    ) { }

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this._storageApiService.getGeneralConfig().then(config => {
      if (config) {
        this.generalConfig = config;
      } else {
        this.generalConfig = new GeneralConfig;
      }
    })
  }

  onSelectLanguage(value) {
    this.selectedLanguage = value;
    this.translate.use(this.selectedLanguage);
  }

  doConfirm() {
    this.generalConfig.language = this.selectedLanguage;
    this._storageApiService.setGeneralConfig(this.generalConfig).then(res => {
      this.router.navigate(['/']);
    });
  }


}
