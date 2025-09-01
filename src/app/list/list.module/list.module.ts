import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list.component';
import { SpinnerComponent } from '../../shared/spinner.component';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [], // Standalone component
  imports: [
    CommonModule,
    MatListModule,
    MatProgressSpinnerModule,
    SpinnerComponent,
    RouterModule.forChild([
      { path: '', component: ListComponent }
    ])
  ]
})
export class ListModule {}
