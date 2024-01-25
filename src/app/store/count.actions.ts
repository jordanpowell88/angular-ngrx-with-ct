import { createAction } from '@ngrx/store';

export const incrementCount = createAction('[COUNT] increment');
export const decrementCount = createAction('[COUNT] decrement');
export const doubleCount = createAction('[COUNT] double');
export const clearCount = createAction('[COUNT} clear');
