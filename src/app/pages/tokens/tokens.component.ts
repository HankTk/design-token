import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tokens',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Design Tokens</h1>
      <div class="tokens-grid">
        <div class="token-section">
          <h2>Colors</h2>
          <div class="token-list">
            <div class="token-item">
              <div class="token-preview" style="background-color: var(--primary-color)"></div>
              <div class="token-info">
                <span class="token-name">Primary Color</span>
                <span class="token-value">var(--primary-color)</span>
              </div>
            </div>
            <div class="token-item">
              <div class="token-preview" style="background-color: var(--secondary-color)"></div>
              <div class="token-info">
                <span class="token-name">Secondary Color</span>
                <span class="token-value">var(--secondary-color)</span>
              </div>
            </div>
          </div>
        </div>

        <div class="token-section">
          <h2>Spacing</h2>
          <div class="token-list">
            <div class="token-item">
              <div class="token-preview" style="width: var(--spacing-sm); height: var(--spacing-sm)"></div>
              <div class="token-info">
                <span class="token-name">Small Spacing</span>
                <span class="token-value">var(--spacing-sm)</span>
              </div>
            </div>
            <div class="token-item">
              <div class="token-preview" style="width: var(--spacing-md); height: var(--spacing-md)"></div>
              <div class="token-info">
                <span class="token-name">Medium Spacing</span>
                <span class="token-value">var(--spacing-md)</span>
              </div>
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

    .tokens-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-xl);
    }

    .token-section {
      h2 {
        font-size: var(--font-size-xl);
        margin-bottom: var(--spacing-lg);
      }
    }

    .token-list {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-md);
    }

    .token-item {
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
      padding: var(--spacing-md);
      background-color: var(--surface-color);
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-sm);
    }

    .token-preview {
      width: 48px;
      height: 48px;
      border-radius: var(--border-radius-sm);
      border: 1px solid var(--border-color);
    }

    .token-info {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-xs);
    }

    .token-name {
      font-weight: 500;
    }

    .token-value {
      font-family: monospace;
      color: var(--text-color-secondary);
      font-size: var(--font-size-sm);
    }
  `]
})
export class TokensComponent {} 