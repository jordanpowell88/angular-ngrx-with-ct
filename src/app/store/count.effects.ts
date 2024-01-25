import { Injectable, inject } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import * as CountActions from './count.actions';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs';
import { selectCount } from './count.reducer';

@Injectable()
export class CountEffects {
  constructor(private actions$: Actions, private store: Store) {}

  doubleCountEffects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountActions.incrementCount),
      concatLatestFrom(() => this.store.select(selectCount)),
      map((action, count) => count),
      filter((count) => count >= 10),
      map(() => CountActions.doubleCount())
    )
  );
}
