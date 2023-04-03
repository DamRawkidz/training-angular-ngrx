import { createAction, props } from '@ngrx/store';

export const INCREASE_NUMBER = createAction(
  '[App State] increase number'
)

export const DECREASE_NUMBER = createAction(
  '[App State] decrease number'
)


export const LOAD_MOCK_API =  createAction(
  '[App State] load mock api'
)

export const LOAD_MOCK_API_SUCCESS = createAction(
  '[App State] load mock api success',
  props<{ result: any}>()
)

export const LOAD_MOCK_API_FAILURE = createAction(
  '[App State] load mock api failure',
  props<{ error: string }>()
)
