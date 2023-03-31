import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appStateReducer } from './reducer/app-reducer.reducer';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('appState',appStateReducer)
  ]
})
export class AppStateModule { }
