import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { StylesService } from './services/styles.service';
import { ThemeService } from './services/theme.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    StylesService,
    ThemeService
  ]
}; 