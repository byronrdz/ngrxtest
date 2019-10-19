import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Component Counter] Increments');
export const decrement = createAction('[Component Counter] Decrement');
export const reset = createAction('[Component Counter] Reset');
export const maxim = createAction('[Component Counter] Maxim');
export const setVal = createAction('[Component Counter] SetVal', props<{val: number}>());
/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/