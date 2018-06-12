import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { WeatherModule } from './weather/weather.module';

import { AppComponent } from './app.component';
// import { WeatherService } from './weather/weather.service';
import { HttpClientModule} from '@angular/common/http';
import {storeData} from './weather/store/reducers/weather';
import {StoreModule} from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
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
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      WeatherEffects
    
    ]),
    WeatherModule,
    HttpClientModule,
 
  ],
  // providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
