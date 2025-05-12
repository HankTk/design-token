import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Components</h1>
      <div class="components-grid">
        <div class="component-section">
          <h2>Buttons</h2>
          <div class="component-demo">
            <button class="btn btn-primary">Primary Button</button>
            <button class="btn btn-secondary">Secondary Button</button>
          </div>
        </div>

        <div class="component-section">
          <h2>Cards</h2>
          <div class="component-demo">
            <div class="card">
              <h3>Card Title</h3>
              <p>This is a sample card component that uses our design tokens for consistent styling.</p>
            </div>
          </div>
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
      font-size: var(--font-size-2xl);
      margin-bottom: var(--spacing-xl);
    }

    .components-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-xl);
    }

    .component-section {
      h2 {
        font-size: var(--font-size-xl);
        margin-bottom: var(--spacing-lg);
      }
    }

    .component-demo {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-md);
      padding: var(--spacing-lg);
      background-color: var(--surface-color);
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-sm);
    }

    .card {
      h3 {
        font-size: var(--font-size-lg);
        margin-bottom: var(--spacing-md);
      }

      p {
        color: var(--text-color-secondary);
        line-height: 1.5;
      }
    }
  `]
})
export class ComponentsComponent {} 