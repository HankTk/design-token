import { Component, Output, EventEmitter, ElementRef, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * A flexible container component that supports various styling options.
 * This component can be used as a base for other components or as a standalone container.
 */
@Component({
  selector: 'ax-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ax-box.component.html',
  styleUrls: ['./ax-box.component.scss']
})
export class AxBoxComponent {

  protected readonly elementRef = inject(ElementRef);

  /** Custom CSS class to be applied to the box */
  @Input() axClass = '';

  /** Event emitted when the box is clicked */
  @Output() clicked = new EventEmitter<void>();

  /**
   * Handles click events on the box
   * @param event The click event
   */
  onClick(event: MouseEvent): void {
    this.clicked.emit();
  }

}
