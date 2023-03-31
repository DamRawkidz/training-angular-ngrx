import { ActionReducerMap } from '@ngrx/store';
import { AppNGRXtrainingState, appStateReducer } from '../app-state/reducer/app-reducer.reducer';

export interface AppState {
    appState: AppNGRXtrainingState
}

export const appReducers: ActionReducerMap<AppState> = {
  appState: appStateReducer
}
