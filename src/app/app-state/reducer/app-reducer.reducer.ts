import { Action, createReducer, on } from '@ngrx/store';
import { Mockdata } from 'src/app/mock-api/mock-api.service';
import { DECREASE_NUMBER, INCREASE_NUMBER, LOAD_MOCK_API_SUCCESS } from '../action/aap.actions';


export const appReducerFeatureKey = 'appReducer';

export interface AppNGRXtrainingState {
    counter: number
    loadResult: Mockdata
}

export const initialState: AppNGRXtrainingState = {
  counter: 0,
  loadResult: {
    result: ''
  }
};

export const reducer = createReducer(
  initialState,
  on(INCREASE_NUMBER,(state,action) => ({
    counter: state.counter + 1,
    loadResult: {
      result:''
    }
  })),
  on(DECREASE_NUMBER, (state, action) => ({
    counter: state.counter - 1,
    loadResult: {
      result:''
    }
  })),
  on(LOAD_MOCK_API_SUCCESS, (state, action) => ({
    ...state,
    loadResult: {
      ...action.result
    }
  }))
);


export function appStateReducer(state: AppNGRXtrainingState | undefined ,action: Action) {
  return reducer(state,action)
}
