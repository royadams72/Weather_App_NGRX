import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { WeatherModule } from './weather/weather.module';

import { AppComponent } from './app.component';
import { WeatherService } from './weather/weather.service';
import { HttpClientModule} from '@angular/common/http';
import {StoreModule} from "@ngrx/store";

export const reducers = {

};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
