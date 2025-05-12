import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mapping',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Token Mapping</h1>
      <div class="mapping-grid">
        <div class="mapping-section">
          <h2>Color Mapping</h2>
          <div class="mapping-list">
            <div class="mapping-item">
              <div class="primitive-token">
                <div class="token-preview" style="background-color: var(--color-blue-500)"></div>
                <div class="token-info">
                  <span class="token-name">--color-blue-500</span>
                  <span class="token-value">#3B82F6</span>
                </div>
              </div>
              <div class="mapping-arrow">→</div>
              <div class="semantic-token">
                <div class="token-preview" style="background-color: var(--primary-color)"></div>
                <div class="token-info">
                  <span class="token-name">--primary-color</span>
                  <span class="token-value">var(--color-blue-500)</span>
                </div>
              </div>
            </div>
            <div class="mapping-item">
              <div class="primitive-token">
                <div class="token-preview" style="background-color: var(--color-gray-500)"></div>
                <div class="token-info">
                  <span class="token-name">--color-gray-500</span>
                  <span class="token-value">#6B7280</span>
                </div>
              </div>
              <div class="mapping-arrow">→</div>
              <div class="semantic-token">
                <div class="token-preview" style="background-color: var(--secondary-color)"></div>
                <div class="token-info">
                  <span class="token-name">--secondary-color</span>
                  <span class="token-value">var(--color-gray-500)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mapping-section">
          <h2>Button Styles</h2>
          <div class="code-section">
            <pre><code>.btn {{ '{' }}
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-sm);
  border: none;
  cursor: pointer;
  font-size: var(--font-size-md);
  transition: background-color var(--transition-fast);

  &-primary {{ '{' }}
    background-color: var(--primary-color);
    color: white;

    &:hover {{ '{' }}
      opacity: 0.9;
    {{ '}' }}
  {{ '}' }}

  &-secondary {{ '{' }}
    background-color: var(--secondary-color);
    color: white;

    &:hover {{ '{' }}
      opacity: 0.9;
    {{ '}' }}
  {{ '}' }}
{{ '}' }}</code></pre>
          </div>
        </div>

        <div class="mapping-section full-width">
          <h2>Spacing Mapping</h2>
          <div class="mapping-list">
            <div class="mapping-item">
              <div class="primitive-token">
                <div class="token-preview" style="width: 8px; height: 8px"></div>
                <div class="token-info">
                  <span class="token-name">--spacing-2</span>
                  <span class="token-value">8px</span>
                </div>
              </div>
              <div class="mapping-arrow">→</div>
              <div class="semantic-token">
                <div class="token-preview" style="width: var(--spacing-sm); height: var(--spacing-sm)"></div>
                <div class="token-info">
                  <span class="token-name">--spacing-sm</span>
                  <span class="token-value">var(--spacing-2)</span>
                </div>
              </div>
            </div>
            <div class="mapping-item">
              <div class="primitive-token">
                <div class="token-preview" style="width: 16px; height: 16px"></div>
                <div class="token-info">
                  <span class="token-name">--spacing-4</span>
                  <span class="token-value">16px</span>
                </div>
              </div>
              <div class="mapping-arrow">→</div>
              <div class="semantic-token">
                <div class="token-preview" style="width: var(--spacing-md); height: var(--spacing-md)"></div>
                <div class="token-info">
                  <span class="token-name">--spacing-md</span>
                  <span class="token-value">var(--spacing-4)</span>
                </div>
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

    .mapping-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--spacing-xl);
    }

    .mapping-section {
      h2 {
        font-size: var(--font-size-xl);
        margin-bottom: var(--spacing-lg);
      }

      &.full-width {
        grid-column: 1 / -1;
      }
    }

    .mapping-list {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-md);
    }

    .mapping-item {
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
      padding: var(--spacing-md);
      background-color: var(--surface-color);
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-sm);
    }

    .primitive-token,
    .semantic-token {
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
      flex: 1;
    }

    .mapping-arrow {
      color: var(--text-color-secondary);
      font-size: var(--font-size-xl);
      padding: 0 var(--spacing-sm);
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

    .code-section {
      background-color: var(--surface-color);
      border-radius: var(--border-radius-md);
      padding: var(--spacing-md);
      box-shadow: var(--shadow-sm);
      height: 100%;
    }

    pre {
      margin: 0;
      white-space: pre-wrap;
      font-family: 'Courier New', Courier, monospace;
      color: var(--text-color);
      line-height: 1.5;
    }

    code {
      display: block;
    }
  `]
})
export class MappingComponent {} 