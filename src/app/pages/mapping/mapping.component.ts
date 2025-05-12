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
          <div class="mode-group">
            <h3 class="mode-header">Light Mode</h3>
            <div class="mapping-list">
              <!-- Primary Color Mapping (Light) -->
              <div class="mapping-item horizontal">
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
              <!-- Secondary Color Mapping (Light) -->
              <div class="mapping-item horizontal">
                <div class="primitive-token">
                  <div class="token-preview" style="background-color: var(--color-gray-500)"></div>
                  <div class="token-info">
                    <span class="token-name">--color-gray-500</span>
                    <span class="token-value">#9E9E9E</span>
                  </div>
                </div>
                <div class="mapping-arrow">→</div>
                <div class="semantic-token">
                  <div class="token-preview" style="background-color: var(--color-gray-500)"></div>
                  <div class="token-info">
                    <span class="token-name">--secondary-color</span>
                    <span class="token-value">var(--color-gray-500)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mode-group">
            <h3 class="mode-header">Dark Mode</h3>
            <div class="mapping-list">
              <!-- Primary Color Mapping (Dark) -->
              <div class="mapping-item horizontal">
                <div class="primitive-token">
                  <div class="token-preview" style="background-color: var(--color-blue-300)"></div>
                  <div class="token-info">
                    <span class="token-name">--color-blue-300</span>
                    <span class="token-value">#64B5F6</span>
                  </div>
                </div>
                <div class="mapping-arrow">→</div>
                <div class="semantic-token">
                  <div class="token-preview" style="background-color: var(--color-blue-300)"></div>
                  <div class="token-info">
                    <span class="token-name">--primary-color</span>
                    <span class="token-value">var(--color-blue-300)</span>
                  </div>
                </div>
              </div>
              <!-- Secondary Color Mapping (Dark) -->
              <div class="mapping-item horizontal">
                <div class="primitive-token">
                  <div class="token-preview" style="background-color: var(--color-gray-400)"></div>
                  <div class="token-info">
                    <span class="token-name">--color-gray-400</span>
                    <span class="token-value">#BDBDBD</span>
                  </div>
                </div>
                <div class="mapping-arrow">→</div>
                <div class="semantic-token">
                  <div class="token-preview" style="background-color: var(--color-gray-400)"></div>
                  <div class="token-info">
                    <span class="token-name">--secondary-color</span>
                    <span class="token-value">var(--color-gray-400)</span>
                  </div>
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
            <div class="mapping-item spacing-card horizontal">
              <div class="primitive-token">
                <div class="token-preview spacing-preview" style="width: 8px; height: 8px; background: #9ca3af;"></div>
                <div class="token-info">
                  <span class="token-name">--spacing-2</span>
                  <span class="token-value">8px</span>
                </div>
              </div>
              <div class="mapping-arrow">→</div>
              <div class="semantic-token">
                <div class="token-preview spacing-preview" style="width: var(--spacing-sm); height: var(--spacing-sm); background: #9ca3af;"></div>
                <div class="token-info">
                  <span class="token-name">--spacing-sm</span>
                  <span class="token-value">var(--spacing-2)</span>
                </div>
              </div>
            </div>
            <div class="mapping-item spacing-card horizontal">
              <div class="primitive-token">
                <div class="token-preview spacing-preview" style="width: 16px; height: 16px; background: #9ca3af;"></div>
                <div class="token-info">
                  <span class="token-name">--spacing-4</span>
                  <span class="token-value">16px</span>
                </div>
              </div>
              <div class="mapping-arrow">→</div>
              <div class="semantic-token">
                <div class="token-preview spacing-preview" style="width: var(--spacing-md); height: var(--spacing-md); background: #9ca3af;"></div>
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

    .theme-mapping-header.vertical {
      flex-direction: row;
      gap: 2rem;
      margin-left: 0;
      margin-bottom: var(--spacing-xs);
    }

    .mapping-list.vertical {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-lg);
    }

    .mapping-item.vertical {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-md);
      align-items: stretch;
      background: none;
      box-shadow: none;
      padding: 0;
    }

    .theme-label.mobile {
      display: none;
    }

    @media (max-width: 600px) {
      .theme-mapping-header.vertical {
        display: none;
      }
      .theme-label.mobile {
        display: block;
        font-weight: 600;
        font-size: var(--font-size-sm);
        color: var(--text-color-secondary);
        margin-bottom: var(--spacing-xs);
      }
    }

    .theme-mapping {
      flex: 1;
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
      background-color: var(--surface-color);
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-sm);
      padding: var(--spacing-md);
    }

    .theme-mapping.dark {
      /* Optionally add a border or style to distinguish dark theme column */
      border-left: 2px dashed var(--border-color);
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

    .mode-group {
      margin-bottom: var(--spacing-xl);
    }
    .mode-header {
      font-size: var(--font-size-lg);
      font-weight: 600;
      margin-bottom: var(--spacing-md);
      color: var(--primary-color);
    }

    .mapping-item.horizontal {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: var(--spacing-md);
      background: var(--surface-color);
      box-shadow: var(--shadow-sm);
      border-radius: var(--border-radius-md);
      padding: var(--spacing-md);
      margin-bottom: var(--spacing-md);
    }

    .spacing-card {
      background: var(--surface-color);
      box-shadow: var(--shadow-sm);
      border-radius: var(--border-radius-md);
      padding: var(--spacing-md);
      margin-bottom: var(--spacing-md);
    }
  `]
})
export class MappingComponent {} 