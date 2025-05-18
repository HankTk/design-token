import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';
import { SidenavService } from '../../../services/sidenav.service';
import { SettingsService } from '../../../services/settings.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  theme$;

  constructor(
    private themeService: ThemeService,
    private drawerService: SidenavService,
    private settingsService: SettingsService
  ) {
    this.theme$ = this.themeService.theme$;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleSidenav() {
    this.drawerService.toggle();
  }

  toggleSettings() {
    this.settingsService.toggle();
  }
}
