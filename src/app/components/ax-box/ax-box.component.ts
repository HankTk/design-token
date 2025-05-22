import { Component, Input, Output, EventEmitter, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  StylesService, 
  ComponentVariant, 
  ComponentSize,
  ComponentPadding,
  ComponentMargin,
  ComponentRadius,
  ComponentShadow
} from '../../services/styles.service';

/**
 * A flexible container component that supports various styling options
 */
@Component({
  selector: 'ax-box',
  standalone: true,
  imports: [CommonModule],
  providers: [StylesService],
  templateUrl: './ax-box.component.html',
  styleUrls: ['./ax-box.component.scss']
})
export class AxBoxComponent {

  protected readonly stylesService = inject(StylesService);
  protected readonly elementRef = inject(ElementRef);

  /** Base class name for the box */
  private readonly BASE_CLASS = 'ax-box';

  /** Whether the button is disabled */
  @Input() axClass = '';


  /** Whether the box should take full width */
  @Input() fullWidth = false;

  /** Whether the box should take full height */
  @Input() fullHeight = false;

  /** Whether the box should be centered */
  @Input() centered = false;

  /** Whether the box should have a border */
  @Input() bordered = false;

  /** Whether the box should be clickable */
  @Input() clickable = false;

  /** Whether the box is disabled */
  @Input() disabled = false;

  /** Whether the box is in loading state */
  @Input() loading = false;

  /** Event emitted when the box is clicked */
  @Output() clicked = new EventEmitter<void>();

  /**
   * Gets the CSS classes for the box based on its current state and attributes
   * @returns Space-separated string of CSS classes
   */
  getClass(): string {
    const classes = [this.BASE_CLASS];
    const classList = Array.from(this.elementRef.nativeElement.classList) as string[];

    this.stylesService.addVariantClass(classes, classList, this.BASE_CLASS);
    this.stylesService.addSizeClasses(classes, classList, this.BASE_CLASS);
    this.stylesService.addSpacingClasses(classes, classList, this.BASE_CLASS);
    this.stylesService.addModifierClasses(classes, this.BASE_CLASS, {
      'full-width': this.fullWidth,
      'full-height': this.fullHeight,
      'centered': this.centered,
      'bordered': this.bordered,
      'clickable': this.clickable,
      'disabled': this.disabled,
      'loading': this.loading
    });

    return classes.join(' ');
  }

  /**
   * Handles click events on the box
   * @param event The click event
   */
  onClick(event: MouseEvent): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit();
    }
  }
}
