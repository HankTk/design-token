import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly THEME_KEY = 'preferred-theme';
  private readonly THEME_ATTRIBUTE = 'data-theme';

  private themeSubject = new BehaviorSubject<Theme>(this.getInitialTheme());
  theme$ = this.themeSubject.asObservable();

  constructor() {
    // Apply initial theme
    this.applyTheme(this.themeSubject.value);
  }

  /**
   * Toggles between light and dark themes
   */
  toggleTheme(): void {
    const newTheme = this.themeSubject.value === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  /**
   * Sets a specific theme
   * @param theme The theme to set ('light' or 'dark')
   */
  setTheme(theme: Theme): void {
    this.themeSubject.next(theme);
    this.applyTheme(theme);
    localStorage.setItem(this.THEME_KEY, theme);
  }

  /**
   * Gets the current theme
   * @returns The current theme
   */
  getCurrentTheme(): Theme {
    return this.themeSubject.value;
  }

  private getInitialTheme(): Theme {
    // Check localStorage first
    const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
    if (savedTheme) {
      return savedTheme;
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    // Default to light theme
    return 'light';
  }

  private applyTheme(theme: Theme): void {
    if (theme === 'dark') {
      document.documentElement.setAttribute(this.THEME_ATTRIBUTE, 'dark');
    } else {
      document.documentElement.removeAttribute(this.THEME_ATTRIBUTE);
    }
  }

} 