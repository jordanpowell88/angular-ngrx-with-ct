import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './store/count.reducer';
import { CountEffects } from './store/count.effects';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  declarations: [AppComponent, StepperComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      count: reducer,
    }),
    EffectsModule.forRoot([CountEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
