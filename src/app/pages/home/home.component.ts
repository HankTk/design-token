import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Welcome to Design Token App</h1>
      <div class="card-grid">
        <div class="card">
          <h2>Design Tokens</h2>
          <p>This application demonstrates the use of design tokens for consistent styling across components.</p>
        </div>
        <div class="card">
          <h2>Theming</h2>
          <p>Try switching between light and dark themes using the settings panel.</p>
        </div>
        <div class="card">
          <h2>Responsive Layout</h2>
          <p>The layout adapts to different screen sizes and includes a responsive navigation drawer.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: var(--spacing-lg);
    }

    h1 {
      margin-bottom: var(--spacing-xl);
      font-size: var(--font-size-xl);
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-lg);
    }

    .card {
      h2 {
        margin-bottom: var(--spacing-md);
        font-size: var(--font-size-lg);
      }

      p {
        color: var(--text-secondary-color);
        line-height: 1.5;
      }
    }
  `]
})
export class HomeComponent {} 