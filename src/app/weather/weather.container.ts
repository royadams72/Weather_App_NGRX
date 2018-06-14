import { Component, OnInit, Output } from '@angular/core';
import { WeatherService } from './weather.service';
// import { WeatherList } from '../model/weather';
import { Store } from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import { UPDATE_CITIES_ACTION } from './store/actions/weather';
import { Cities } from '../model/weather';
import { AppState } from './store/app.state';
@Component({
  selector: 'app-weather',
  template: `
  <app-search (onSearchCity)="citySearch($event)"></app-search>
  <app-results [cities]="cities$ | async"></app-results>  `
})
export class WeatherContainer{
  cities;
  cities$:Observable<Cities[]>;

  constructor(private weatherService: WeatherService, private store: Store<AppState>) {
   this.cities$ = this.store.select(state => state.storeData)
  }
  citySearch(city) {
    console.log(this.cities$)
    this.store.dispatch({type: UPDATE_CITIES_ACTION, payload: city })

  }

}
