import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/navigation/header/header.component';
import { SidenavComponent } from './common/navigation/sidenav/sidenav.component';
import { SettingsComponent } from './common/navigation/settings/settings.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidenavComponent, SettingsComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'design-token-app';

  constructor(private themeService: ThemeService) {
    // Initialize theme service
    this.themeService.theme$.subscribe();
  }
}
