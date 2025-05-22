import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AxButtonComponent } from '../../components/ax-button/ax-button.component';
import { AxBoxComponent } from '../../components/ax-box/ax-box.component';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule, AxButtonComponent, AxBoxComponent],
  templateUrl: 'components.component.html',
  styleUrls: ['components.component.scss']
})
export class ComponentsComponent {} 