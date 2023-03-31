import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCounter } from 'src/app/app-state/selector/app.selectors';
import { AppState } from 'src/app/state/app-reducer';

@Component({
  selector: 'app-ngrx-component-two',
  templateUrl: './ngrx-component-two.component.html',
  styleUrls: ['./ngrx-component-two.component.scss']
})
export class NgrxComponentTwoComponent {
  counter$ = new Observable()

  constructor(
    private store: Store<AppState>
  ){
    this.counter$ = this.store.select(selectCounter)

  }

}
