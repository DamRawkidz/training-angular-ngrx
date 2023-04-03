import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { MockApiService } from 'src/app/mock-api/mock-api.service';
import { LOAD_MOCK_API, LOAD_MOCK_API_FAILURE, LOAD_MOCK_API_SUCCESS } from '../action/aap.actions';



@Injectable()
export class AppStateEffects {


  loadAppState$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOAD_MOCK_API),
      switchMap(() => this.mockSV.mockApi().pipe(
        map(result => LOAD_MOCK_API_SUCCESS({ result: result })),
        catchError(err => {
          // console.log(err)
          // alert('api error')
          return of(LOAD_MOCK_API_FAILURE({ error:  err.result}))
        })
      ))
    )
  })

  constructor(
    private actions$: Actions,
    private mockSV: MockApiService
  ) {}
}
