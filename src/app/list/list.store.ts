import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

export interface Item {
  id: number;
  name: string;
  description: string;
}

export interface ListState {
  items: Item[];
  loading: boolean;
  error: string | null;
}

@Injectable({ providedIn: 'root' })
export class ListStore extends ComponentStore<ListState> {
  readonly items$ = this.select(state => state.items);
  readonly loading$ = this.select(state => state.loading);
  readonly error$ = this.select(state => state.error);

  constructor(private http: HttpClient) {
    super({ items: [], loading: false, error: null });
  }

  readonly loadItems = this.effect((trigger$) =>
    trigger$.pipe(
      tap(() => this.patchState({ loading: true, error: null })),
      switchMap(() =>
        this.http.get<Item[]>('/api/items').pipe(
          tap(items => {
            console.log('Fetched items:', items);
            this.patchState({ items, loading: false });
          }),
          catchError(err => {
            console.error('Error loading items', err);
            this.patchState({ error: 'Failed to load items', loading: false });
            return of([]);
          })
        )
      )
    )
  );
}
