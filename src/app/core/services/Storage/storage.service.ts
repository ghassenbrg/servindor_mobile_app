import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async set(key: string, value: any): Promise<any> {
    try {
      const result = await Storage.set({
        key: key,
        value: value
      });
      return true;
    } catch (reason) {
      console.log(reason);
      return false;
    }
  }
  // to get a key/value pair
  async get(key: string): Promise<any> {
    try {
      const result = await Storage.get({ key: key });
      if (result != null) {
        return result.value;
      }
      return null;
    } catch (reason) {
      console.log(reason);
      return null;
    }
  }
  // set a key/value object
  async setObject(key: string, object: Object) {
    try {
      await Storage.set({
        key: key,
        value: JSON.stringify(object)
      });
      return true;
    } catch (reason) {
      console.log(reason);
      return false;
    }
  }
  // get a key/value object
  async getObject(key: string): Promise<any> {
    try {
      const result = await Storage.get({ key: key });
      if (result != null) {
        return JSON.parse(result.value);
      }
      return null;
    } catch (reason) {
      console.log(reason);
      return null;
    }
  }

  async remove(key: string) {
    await Storage.remove({ key: key });
  }

  async keys() {
    const { keys } = await Storage.keys();
    return keys;
  }
  
  async clear() {
    await Storage.clear();
  }
}
