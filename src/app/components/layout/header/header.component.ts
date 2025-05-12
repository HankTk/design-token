import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';
import { DrawerService } from '../../../services/drawer.service';
import { SettingsService } from '../../../services/settings.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <div class="header__left">
        <button class="btn btn-icon" (click)="toggleSidenav()">
          <i class="material-icons">menu</i>
        </button>
        <h1>Design Token App</h1>
      </div>
      <div class="header__right">
        <button class="btn btn-icon" (click)="toggleSettings()">
          <i class="material-icons">settings</i>
        </button>
        <button class="btn btn-icon" (click)="toggleTheme()">
          <i class="material-icons">{{ (theme$ | async) === 'dark' ? 'light_mode' : 'dark_mode' }}</i>
        </button>
      </div>
    </header>
  `,
  styles: [`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--spacing-md);
      background-color: var(--surface-color);
      box-shadow: var(--shadow-sm);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }

    .header__left, .header__right {
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
    }

    .btn-icon {
      background: none;
      border: none;
      color: var(--text-color);
      cursor: pointer;
      padding: var(--spacing-sm);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color var(--transition-fast);

      &:hover {
        background-color: var(--border-color);
      }
    }

    h1 {
      font-size: var(--font-size-lg);
      margin: 0;
    }
  `]
})
export class HeaderComponent {
  theme$;

  constructor(
    private themeService: ThemeService,
    private drawerService: DrawerService,
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