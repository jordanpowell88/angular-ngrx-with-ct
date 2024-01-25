import { createFeature, createReducer, on } from '@ngrx/store';
import * as CountActions from './count.actions';

interface State {
  count: number;
}

const initialState: State = {
  count: 0,
};

const countFeature = createFeature({
  name: 'count',
  reducer: createReducer(
    initialState,
    on(CountActions.incrementCount, ({ count }) => ({
      count: count < 10 ? count + 1 : count,
    })),
    on(CountActions.decrementCount, ({ count }) => ({
      count: count - 1,
    })),
    on(CountActions.doubleCount, ({ count }) => ({
      count: count * 2,
    })),
    on(CountActions.clearCount, () => ({
      count: 0,
    }))
  ),
});

export const { name, reducer, selectCountState, selectCount } = countFeature;
