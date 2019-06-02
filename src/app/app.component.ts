import { Component } from '@angular/core';
import { NavigationDirection } from './shared/components/navigation-bar/navigation-bar.component';
import { SettingsService, AppSettings } from './shared/services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public settingsDirection: NavigationDirection = NavigationDirection.FROM_SIDE_END;
  public appSettings: AppSettings;
  public showSettings = false;

  title = 'iluiNishmat';

  constructor(private settingsService: SettingsService) {
    this.settingsService.appSettings$.subscribe((appSettings) => {
      this.appSettings = {...appSettings};
    });
  }
}
