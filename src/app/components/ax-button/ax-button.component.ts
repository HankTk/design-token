import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylesService } from '../../services/styles.service';
import { Width, Height, WIDTH_TOKENS, HEIGHT_TOKENS } from '../../constants/dimensions';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'information';

type WidthTokenKey = keyof typeof WIDTH_TOKENS;
type HeightTokenKey = keyof typeof HEIGHT_TOKENS;

@Component({
  selector: 'ax-button',
  standalone: true,
  imports: [CommonModule],
  providers: [StylesService],
  templateUrl: './ax-button.component.html',
  styleUrls: ['./ax-button.component.scss']
})
export class AxButtonComponent 
{
  @Input() variant: ButtonVariant = 'primary';
  @Input() width?: Width;
  @Input() height?: Height;
  @Input() disabled = false;
  @Input() loading = false;
  @Input() fullWidth = false;
  @Output() clicked = new EventEmitter<void>();

  constructor(private stylesService: StylesService) {}

  getClass(): string
  {
    const classes = ['ax-button'];
    
    // Class-based approach for variant
    classes.push(`ax-button-${this.variant}`);
    
    // Class-based approach for modifiers
    if (this.disabled) classes.push('ax-button-disabled');
    if (this.loading) classes.push('ax-button-loading');
    if (this.fullWidth) classes.push('ax-button-full');
    
    return classes.join(' ');
  }

  // Style-based approach for dynamic styles
  getDynamicStyles()
  {
    const baseStyles = this.stylesService.getVariantStyles(this.variant);
    
    return {
      ...baseStyles,
      // Add any additional dynamic styles here
      opacity: this.disabled ? '0.6' : '1',
      cursor: this.disabled ? 'not-allowed' : 'pointer',
      width: this.fullWidth ? WIDTH_TOKENS.FULL : (this.width ? WIDTH_TOKENS[this.width.toUpperCase() as WidthTokenKey] : 'auto'),
      height: this.height ? HEIGHT_TOKENS[this.height.toUpperCase() as HeightTokenKey] : 'auto'
    };
  }

  onClick(event: Event)
  {
    if (this.disabled || this.loading) {
      event.preventDefault();
      return;
    }
    this.clicked.emit();
  }

} 