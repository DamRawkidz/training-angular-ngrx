import { Action, createReducer, on } from '@ngrx/store';
import { DECREASE_NUMBER, INCREASE_NUMBER } from '../action/aap.actions';


export const appReducerFeatureKey = 'appReducer';

export interface AppNGRXtrainingState {
    counter: number
}

export const initialState: AppNGRXtrainingState = {
  counter: 0
};

export const reducer = createReducer(
  initialState,
  on(INCREASE_NUMBER,(state,action) => ({
    counter: state.counter + 1
  })),
  on(DECREASE_NUMBER, (state, action) => ({
    counter: state.counter - 1
  }))
);


export function appStateReducer(state: AppNGRXtrainingState | undefined ,action: Action) {
  return reducer(state,action)
}
