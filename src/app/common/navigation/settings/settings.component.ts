import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, Theme } from '../../../services/theme.service';
import { SettingsService } from '../../../services/settings.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  isOpen$;
  theme$;
  themes: Theme[] = ['light', 'dark', 'blue', 'green', 'purple'];

  constructor(
    private themeService: ThemeService,
    private settingsService: SettingsService
  ) {
    this.isOpen$ = this.settingsService.isOpen$;
    this.theme$ = this.themeService.theme$;
  }

  close() {
    this.settingsService.close();
  }

  setTheme(theme: Theme) {
    this.themeService.setTheme(theme);
  }
}
