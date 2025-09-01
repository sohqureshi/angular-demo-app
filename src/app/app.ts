
import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HeaderComponent } from './shared/header.component';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
// import { LoginComponent } from './auth/login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    HeaderComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test-app');
  private router = inject(Router);
  private auth = inject(AuthService);

  get showLogout() {
    return this.router.url !== '/login' && this.auth.isLoggedIn();
  }

  onLogout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
