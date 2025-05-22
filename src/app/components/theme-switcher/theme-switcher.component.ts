import { Component } from '@angular/core';
import { ThemeService, Theme } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="theme-switcher">
      <button (click)="toggleTheme()">Toggle Theme</button>
      
      <div class="theme-buttons">
        <button *ngFor="let theme of themes" 
                (click)="setTheme(theme)"
                [class.active]="currentTheme === theme">
          {{theme}}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .theme-switcher {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .theme-buttons {
      display: flex;
      gap: 0.5rem;
    }
    
    button {
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .active {
      font-weight: bold;
    }
  `]
})
export class ThemeSwitcherComponent {
  themes: Theme[] = ['light', 'dark', 'blue', 'green', 'purple'];
  currentTheme: Theme;

  constructor(private themeService: ThemeService) {
    this.currentTheme = this.themeService.getCurrentTheme();
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  setTheme(theme: Theme): void {
    this.themeService.setTheme(theme);
  }
} 