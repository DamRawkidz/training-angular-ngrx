import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appReducers } from './state/app-reducer';
import { RxjsComponentComponent } from './rxjs-components/rxjs-component/rxjs-component.component';
import { RxjsComponentTwoComponent } from './rxjs-components/rxjs-component-two/rxjs-component-two.component';
import { NgrxComponentComponent } from './ngrx.components/ngrx-component/ngrx-component.component';
import { NgrxComponentTwoComponent } from './ngrx.components/ngrx-component-two/ngrx-component-two.component';
import { AppStateModule } from './app-state/app-state.module';



export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];
@NgModule({
  declarations: [
    AppComponent,
    RxjsComponentComponent,
    RxjsComponentTwoComponent,
    NgrxComponentComponent,
    NgrxComponentTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStateModule,
    StoreModule.forRoot(appReducers,{
      metaReducers,
      runtimeChecks:{
        strictStateImmutability: false,
        strictActionImmutability: false,
      }
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
