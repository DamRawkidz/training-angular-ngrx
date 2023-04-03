import { LOAD_MOCK_API } from './../../app-state/action/aap.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INCREASE_NUMBER } from 'src/app/app-state/action/aap.actions';
import { selectCounter, selectMockData } from 'src/app/app-state/selector/app.selectors';
import { MockApiService } from 'src/app/mock-api/mock-api.service';
import { AppState } from 'src/app/state/app-reducer';

@Component({
  selector: 'app-ngrx-component',
  templateUrl: './ngrx-component.component.html',
  styleUrls: ['./ngrx-component.component.scss']
})
export class NgrxComponentComponent {
  counter$ = new Observable()
  mockData$ = new Observable()
  constructor(
    private store: Store<AppState>,
  ){
    this.counter$ = this.store.select(selectCounter)
    this.store.dispatch(LOAD_MOCK_API())
    this.mockData$ = this.store.select(selectMockData)
  }


  addCounter(){
    this.store.dispatch(INCREASE_NUMBER())
  }


}
