import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralConfig } from '../../models/generalConfig.model';
import { StorageApiService } from '../../services/Storage/storage-api.service';

@Component({
  selector: 'app-choose-language-screen',
  templateUrl: './choose-language-screen.page.html',
  styleUrls: ['./choose-language-screen.page.scss'],
})
export class ChooseLanguageScreenPage implements OnInit {

  generalConfig: GeneralConfig;

  languages = [
    { value: 'EN', label: 'English', icon:'gb' },
    { value: 'FR', label: 'Français', icon:'fr' },
    { value: 'AR', label: 'عربيّة', icon:'sa' },
    { value: 'TN', label: 'Tounsi', icon:'tn' }
  ];
  selectedLanguage: string = 'EN';

  constructor(
    public router: Router,
    private _storageApiService: StorageApiService
    ) { }

  ngOnInit() {
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
  }

  doConfirm() {
    this.generalConfig.language = this.selectedLanguage;
    this._storageApiService.setGeneralConfig(this.generalConfig).then(res => {
      this.router.navigate(['/']);
    });
  }

}
