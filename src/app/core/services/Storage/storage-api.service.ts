import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';

const PREFIX = environment.prefix;
const ACCESS_TOKEN = `${PREFIX}_access_token`;
const GENERAL_CONFIG = `${PREFIX}_general_config`;

@Injectable({
  providedIn: 'root'
})
export class StorageApiService {

  constructor(private _storageService: StorageService) { }

  public getGeneralConfig() {
    return this._storageService.getObject(GENERAL_CONFIG);
  }
  public setGeneralConfig(configObj) {
    return this._storageService.setObject(GENERAL_CONFIG, configObj);
  }
}
