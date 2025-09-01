import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ListStore } from './list.store';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { SpinnerComponent } from '../shared/spinner.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatListModule, SpinnerComponent, RouterModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  items$;
  loading$;
  error$;

  constructor(private store: ListStore) {
    this.items$ = this.store.items$;
    this.loading$ = this.store.loading$;
    this.error$ = this.store.error$;
    this.store.loadItems();
  }
}
