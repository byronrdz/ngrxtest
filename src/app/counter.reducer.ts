import { Action, createReducer, on } from '@ngrx/store';
import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as CounterActions from './counter.actions';
import { State, AppState } from './model';

export const initialState: State = { val: 0 , data:'Byron'};

const _counterReducer = createReducer (initialState,
  on(CounterActions.increment, state => ({...state, val: state.val + 10 })),
  on(CounterActions.decrement, state => ({...state, val: state.val - 10 })),
  on(CounterActions.maxim, state => ({...state, val: 1000 })),
  on(CounterActions.reset, state => ({...state, val: 0 })),
  on(CounterActions.setVal, (state, {val}) => ({...state, val: val }) )
);

export function counterReducer(state: State, action: Action): State {
  return _counterReducer(state, action);
}

//export const selectAppState = ( appState: AppState ) => appState.feature;

export const selectedAppState = createFeatureSelector<State>('count');

export const selectorVal = createSelector (
  selectedAppState,
  ( state: State ) => state
); 

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/