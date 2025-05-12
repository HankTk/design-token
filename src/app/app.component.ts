import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { DrawerComponent } from './components/layout/drawer/drawer.component';
import { SettingsComponent } from './components/settings/settings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, DrawerComponent, SettingsComponent],
  template: `
    <app-header></app-header>
    <app-drawer></app-drawer>
    <app-settings></app-settings>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .main-content {
      margin-top: 64px; // Header height
      padding: var(--spacing-lg);
      min-height: calc(100vh - 64px);
    }
  `]
})
export class AppComponent {
  title = 'design-token-app';
} 