import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AxBoxComponent } from '../../components/ax-box/ax-box.component';
import { AxButtonComponent } from '../../components/ax-button/ax-button.component';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule, AxBoxComponent, AxButtonComponent],
  templateUrl: 'buttons.component.html',
  styleUrls: ['buttons.component.scss']
})
export class ButtonsComponent {} 