import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SettingsService, AppSettings } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public appSettings: AppSettings;

  @Output() settingsSaved: EventEmitter<null> = new EventEmitter();

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.appSettings$.subscribe((appSettings) => {
      this.appSettings = {...appSettings};
      console.log(this.appSettings);
    });
  }

  fontSizeChanged(newFontSize: number) {
    this.appSettings.fontSize = newFontSize;
  }

  saveSettings() {
    this.settingsService.saveSettings(this.appSettings);
    this.settingsSaved.emit();
  }
}
