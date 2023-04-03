import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appStateReducer } from './reducer/app-reducer.reducer';
import { AppStateEffects } from './effect/app-state.effects';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('appState',appStateReducer),
    EffectsModule.forFeature([
      AppStateEffects
    ])
  ]
})
export class AppStateModule { }
