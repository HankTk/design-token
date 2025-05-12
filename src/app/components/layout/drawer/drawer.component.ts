import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DrawerService } from '../../../services/drawer.service';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="drawer-backdrop" [class.drawer-backdrop--open]="isOpen$ | async" (click)="close()"></div>
    <div class="drawer" [class.drawer--open]="isOpen$ | async">
      <div class="drawer__content">
        <nav class="drawer__nav">
          <a routerLink="/" class="drawer__link" (click)="close()">
            <i class="material-icons">home</i>
            Home
          </a>
          <a routerLink="/tokens" class="drawer__link" (click)="close()">
            <i class="material-icons">palette</i>
            Design Tokens
          </a>
          <a routerLink="/mapping" class="drawer__link" (click)="close()">
            <i class="material-icons">compare_arrows</i>
            Token Mapping
          </a>
          <a routerLink="/components" class="drawer__link" (click)="close()">
            <i class="material-icons">widgets</i>
            Components
          </a>
        </nav>
      </div>
    </div>
  `,
  styles: [`
    .drawer-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      visibility: hidden;
      transition: opacity var(--transition-normal), visibility var(--transition-normal);
      z-index: 800;
    }

    .drawer-backdrop--open {
      opacity: 1;
      visibility: visible;
    }

    .drawer {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 280px;
      background-color: var(--surface-color);
      box-shadow: var(--shadow-md);
      transform: translateX(-100%);
      transition: transform var(--transition-normal);
      z-index: 900;
    }

    .drawer--open {
      transform: translateX(0);
    }

    .drawer__content {
      padding: var(--spacing-lg);
      margin-top: 64px; // Header height
    }

    .drawer__nav {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-sm);
    }

    .drawer__link {
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
      padding: var(--spacing-md);
      color: var(--text-color);
      text-decoration: none;
      border-radius: var(--border-radius-sm);
      transition: background-color var(--transition-fast);

      &:hover {
        background-color: var(--border-color);
      }

      i {
        font-size: 24px;
      }
    }
  `]
})
export class DrawerComponent {
  isOpen$;

  constructor(private drawerService: DrawerService) {
    this.isOpen$ = this.drawerService.isOpen$;
  }

  close() {
    this.drawerService.close();
  }
} 