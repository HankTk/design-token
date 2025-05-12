import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-token-mapping',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
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
  `,
  styles: [`
    .code-section {
      background-color: var(--surface-color);
      border-radius: var(--border-radius-md);
      padding: 1rem;
      margin: 1rem 0;
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
export class TokenMappingComponent {} 