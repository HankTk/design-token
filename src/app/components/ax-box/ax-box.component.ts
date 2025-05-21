import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgStyle, CommonModule } from '@angular/common';
import { VariantType } from '../../services/styles.service';
import { Height, Width, WIDTH, HEIGHT } from '../../common/tokens/dimensions';

type WidthTokenKey = keyof typeof WIDTH;
type HeightTokenKey = keyof typeof HEIGHT;

@Component({
  selector: 'ax-box',
  templateUrl: './ax-box.component.html',
  styleUrls: ['./ax-box.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class AxBoxComponent
{
  @Input() variant: VariantType = 'primary';
  @Input() width?: Width;
  @Input() height?: Height;
  @Input() disabled = false;
  @Input() loading = false;
  @Input() fullWidth = false;
  @Output() clicked = new EventEmitter<void>();

  getClass(): string
  {
    const classes = ['ax-box'];

    // Class-based approach for variant
    classes.push(`ax-box-${this.variant}`);

    // Class-based approach for modifiers
    if (this.disabled) classes.push('ax-box-disabled');
    if (this.loading) classes.push('ax-box-loading');
    if (this.fullWidth) classes.push('ax-box-full');

    return classes.join(' ');
  }

  // Style-based approach for dynamic styles
  getDynamicStyles() {
    return {
      opacity: this.disabled ? '0.6' : '1',
      cursor: this.disabled ? 'not-allowed' : 'pointer',
      width: this.fullWidth ? WIDTH.FULL : (this.width ? WIDTH[this.width.toUpperCase() as WidthTokenKey] : 'auto'),
      height: this.height ? HEIGHT[this.height.toUpperCase() as HeightTokenKey] : 'auto'
    };
  }

  onClick(event: MouseEvent): void
  {
    if (this.disabled || this.loading) {
      event.preventDefault();
      return;
    }
    this.clicked.emit();
  }
}
