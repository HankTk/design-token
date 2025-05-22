import { Component, Input, Output, EventEmitter, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylesService } from '../../services/styles.service';

/**
 * A reusable button component that supports various styles and states
 */
@Component({
  selector: 'ax-button',
  standalone: true,
  imports: [CommonModule],
  providers: [StylesService],
  templateUrl: './ax-button.component.html',
  styleUrls: ['./ax-button.component.scss']
})
export class AxButtonComponent {
  protected readonly stylesService = inject(StylesService);
  protected readonly elementRef = inject(ElementRef);

  /** Base class name for the button */
  private readonly BASE_CLASS = 'ax-button';

  /** Whether the button is disabled */
  @Input() axClass = '';

  /** Whether the button is disabled */
  @Input() disabled = false;

  /** Whether the button is in loading state */
  @Input() loading = false;

  /** Whether the button should take full width */
  @Input() fullWidth = false;

  /** Event emitted when the button is clicked */
  @Output() clicked = new EventEmitter<void>();

  /**
   * Gets the CSS classes for the button based on its current state and attributes
   * @returns Space-separated string of CSS classes
   */
  getClass(): string {
    const classes = [this.BASE_CLASS, 'comp'];
    const classList = Array.from(this.elementRef.nativeElement.classList) as string[];

    // Add variant class
    const variantClass = classList.find(cls => cls.startsWith('v-'));
    if (variantClass) {
      classes.push(`comp-${variantClass.slice(2)}`);
    }

    // Add size classes
    const widthClass = classList.find(cls => cls.startsWith('w-'));
    if (widthClass) {
      classes.push(`comp-${widthClass.slice(2)}`);
    }

    const heightClass = classList.find(cls => cls.startsWith('h-'));
    if (heightClass) {
      classes.push(`comp-${heightClass.slice(2)}`);
    }

    // Add modifier classes
    if (this.disabled) classes.push('comp-disabled');
    if (this.loading) classes.push('comp-loading');
    if (this.fullWidth) classes.push('comp-full-width');

    return classes.join(' ');
  }

  /**
   * Handles the button click event
   * @param event The click event
   */
  onClick(event: Event): void {
    if (this.disabled || this.loading) {
      event.preventDefault();
      return;
    }
    this.clicked.emit();
  }

}
