import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INCREASE_NUMBER } from 'src/app/app-state/action/aap.actions';
import { selectCounter } from 'src/app/app-state/selector/app.selectors';
import { AppState } from 'src/app/state/app-reducer';

@Component({
  selector: 'app-ngrx-component',
  templateUrl: './ngrx-component.component.html',
  styleUrls: ['./ngrx-component.component.scss']
})
export class NgrxComponentComponent {
  counter$ = new Observable()

  constructor(
    private store: Store<AppState>
  ){
    this.counter$ = this.store.select(selectCounter)

  }


  addCounter(){
    this.store.dispatch(INCREASE_NUMBER())
  }


}
