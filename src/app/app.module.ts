import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { WeatherModule } from './weather/weather.module';

import { AppComponent } from './app.component';
// import { WeatherService } from './weather/weather.service';
import { HttpClientModule} from '@angular/common/http';
import {StoreModule} from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {storeData} from './weather/store/reducers/weather';
import { WeatherEffects } from './weather/store/effects/weather';


// , {initialState: undefined}
export const reducers = {
storeData
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {initialState: undefined}),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    WeatherModule,
    HttpClientModule,
    EffectsModule.forRoot([
      WeatherEffects
    
    ]),
  ],
  // providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
