import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-layout',
  imports: [ RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  constructor(private authService: AuthService) {}

  ngOnit() {
    if (!this.authService.isAuthenticated()) {
      window.location.href = '/login';
    }
  }
}
