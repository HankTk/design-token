import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>About</h1>
      <div class="card">
        <h2>About This Application</h2>
        <p>
          This is a sample application that demonstrates the use of design tokens in Angular.
          Design tokens are the visual design atoms of the design system — specifically, they are named entities
          that store visual design attributes.
        </p>
        <h3>Features</h3>
        <ul>
          <li>Design token-based styling</li>
          <li>Light and dark theme support</li>
          <li>Responsive layout</li>
          <li>Navigation drawer</li>
          <li>Settings panel</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    h1 {
      margin-bottom: var(--spacing-xl);
      font-size: var(--font-size-xl);
    }

    .card {
      h2 {
        margin-bottom: var(--spacing-md);
        font-size: var(--font-size-lg);
      }

      h3 {
        margin: var(--spacing-lg) 0 var(--spacing-md);
        font-size: var(--font-size-md);
      }

      p {
        color: var(--text-secondary-color);
        line-height: 1.5;
        margin-bottom: var(--spacing-md);
      }

      ul {
        list-style-type: none;
        padding: 0;

        li {
          padding: var(--spacing-sm) 0;
          color: var(--text-secondary-color);
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);

          &::before {
            content: "•";
            color: var(--primary-color);
            font-size: var(--font-size-lg);
          }
        }
      }
    }
  `]
})
export class AboutComponent {} 