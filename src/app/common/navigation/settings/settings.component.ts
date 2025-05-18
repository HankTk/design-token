import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';
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

  setTheme(theme: 'light' | 'dark') {
    this.themeService.setTheme(theme);
  }
}
