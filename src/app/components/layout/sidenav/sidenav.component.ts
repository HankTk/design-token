import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="sidenav" [class.sidenav--open]="isOpen">
      <div class="sidenav__content">
        <ul class="nav-list">
          <li class="nav-item">
            <a routerLink="/" routerLinkActive="active" class="nav-link">
              <i class="material-icons">home</i>
              <span>Home</span>
            </a>
          </li>
          <li class="nav-item">
            <a routerLink="/about" routerLinkActive="active" class="nav-link">
              <i class="material-icons">info</i>
              <span>About</span>
            </a>
          </li>
          <li class="nav-item">
            <a routerLink="/contact" routerLinkActive="active" class="nav-link">
              <i class="material-icons">contact_mail</i>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .sidenav {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 250px;
      background-color: var(--surface-color);
      box-shadow: var(--shadow-md);
      transform: translateX(-100%);
      transition: transform var(--transition-normal);
      z-index: 900;
    }

    .sidenav--open {
      transform: translateX(0);
    }

    .sidenav__content {
      padding: var(--spacing-md);
      margin-top: 64px; // Header height
    }

    .nav-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .nav-item {
      margin-bottom: var(--spacing-sm);
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
      padding: var(--spacing-sm) var(--spacing-md);
      color: var(--text-color);
      text-decoration: none;
      border-radius: var(--border-radius-sm);
      transition: background-color var(--transition-fast);

      &:hover {
        background-color: var(--border-color);
      }

      &.active {
        background-color: var(--primary-color);
        color: white;
      }
    }
  `]
})
export class SidenavComponent {
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
} 