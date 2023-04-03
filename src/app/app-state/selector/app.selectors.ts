import { createFeature, createFeatureSelector, createSelector } from '@ngrx/store';
import { AppModule } from 'src/app/app.module';
import { AppState } from 'src/app/state/app-reducer';
import { AppNGRXtrainingState } from '../reducer/app-reducer.reducer';

const selectApp = createFeatureSelector<AppState,AppNGRXtrainingState>(
  'appState'
)

export const selectCounter = createSelector(
  selectApp,
  state => state.counter
)

export const selectMockData = createSelector(
  selectApp,
  state => state.loadResult.result
)
