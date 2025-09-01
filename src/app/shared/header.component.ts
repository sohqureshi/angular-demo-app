import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary" class="header-toolbar">
      <span class="header-title">Angular Demo App</span>
      <span class="header-spacer"></span>
      <button mat-button *ngIf="showLogout" (click)="logout.emit()">Logout</button>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() showLogout = false;
  @Output() logout = new EventEmitter<void>();
}
