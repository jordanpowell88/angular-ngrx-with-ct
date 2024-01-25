import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from '../store/count.reducer';
import * as CountActions from '../store/count.actions';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent {
  private readonly store = inject(Store);

  count$ = this.store.select(selectCount);

  increment() {
    this.store.dispatch(CountActions.incrementCount());
  }

  decrement() {
    this.store.dispatch(CountActions.decrementCount());
  }

  clear() {
    this.store.dispatch(CountActions.clearCount());
  }
}
