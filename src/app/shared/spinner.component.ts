import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  template: '<div class="spinner"><mat-spinner diameter="40"></mat-spinner></div>',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {}
