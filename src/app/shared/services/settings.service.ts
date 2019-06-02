import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface AppSettings {
  fontSize: number;
  fontColor: string;
}

const defaultSettings: AppSettings = {
  fontSize: 16,
  fontColor: 'bow'
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private appSettings: AppSettings = defaultSettings;
  private haveStorage: boolean;
  public appSettings$: BehaviorSubject<AppSettings>;

  constructor() {
    if (typeof(Storage) !== 'undefined') {
      this.haveStorage = true;
      // read the settings from the storage
      const appSettingsString = localStorage.getItem('appSettings');
      if (appSettingsString) {
        this.appSettings = JSON.parse(appSettingsString);
      }
    } else {
      this.haveStorage = false;
    }

    this.appSettings$ = new BehaviorSubject(this.appSettings);
  }

  saveSettings(newAppSettings: AppSettings) {
    this.appSettings = newAppSettings;
    if (this.haveStorage) {
      localStorage.setItem('appSettings', JSON.stringify(this.appSettings));
    }
    this.appSettings$.next(this.appSettings);
  }
}
