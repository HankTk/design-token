import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DrawerService } from '../../../services/drawer.service';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  isOpen$;

  constructor(private drawerService: DrawerService) {
    this.isOpen$ = this.drawerService.isOpen$;
  }

  close() {
    this.drawerService.close();
  }
}
