import { Component, Input, Output, EventEmitter, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * A reusable button component that supports various styles and states
 */
@Component({
  selector: 'ax-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ax-button.component.html',
  styleUrls: ['./ax-button.component.scss']
})
export class AxButtonComponent {

  protected readonly elementRef = inject(ElementRef);

  /** Custom CSS class to be applied to the button */
  @Input() axClass = '';

  /** Whether the button is disabled */
  @Input() disabled = false;

  /** Event emitted when the button is clicked */
  @Output() clicked = new EventEmitter<void>();

  /**
   * Handles the button click event
   * @param event The click event
   */
  onClick(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    this.clicked.emit();
  }

}
