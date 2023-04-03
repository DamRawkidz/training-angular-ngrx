import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';

export interface Mockdata  {
  result: string
}

@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  constructor() { }

  mockApi(): Observable<Mockdata>{
    return of([]).pipe(
      tap(() => console.log('steam is starting')),
      delay(3000),
      map(x => {
        throw new Error('Valid token not returned');
      }),
      map(() => {
        return {
          result: 'success'
        }
      }),
      catchError(err => {
        return throwError({
          result: 'api error'
        })
      })
    )
  }
}

