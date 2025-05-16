import { Component, Input, inject } from '@angular/core';
import { NgStyle, CommonModule } from '@angular/common';
import { VariantType } from '../../services/styles.service';
import { Height, Width } from '../../constants/dimensions';
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
  @Input() width: Width = 'md';
  @Input() height: Height = 'md';

  getClass(): string
  {
    return `ax-box ax-box-${this.variant} ax-box-w-${this.width} ax-box-h-${this.height}`;
  }

  onClick(event: MouseEvent): void
  {
    console.log('Button clicked!');
  }

}
