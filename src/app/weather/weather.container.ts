import { Component, OnInit, Output } from '@angular/core';
import { WeatherService } from './weather.service';
// import { WeatherList } from '../model/weather';
import { Store } from '@ngrx/store';
import { UPDATE_CITIES_ACTION } from './store/actions/weather';
@Component({
  selector: 'app-weather',
  template: `
  <app-search (onSearchCity)="citySearch($event)"></app-search>
  <app-results [cities]="cities"></app-results>  `
})
export class WeatherContainer implements OnInit{
  cities:Array<any> = [];

  constructor(private weatherService: WeatherService, private store: Store<any>) {}
ngOnInit(){
  console.log(this.store)
  this.store.select("storeData").subscribe(
    (data) => console.log(data)
);
}

  citySearch(city) {
    console.log(city)
    console.log(UPDATE_CITIES_ACTION)
    this.store.dispatch({type: 'UPDATE_CITIES_ACTION', payload: city })
    // this.weatherService.searchWeatherForCity(city)
    // .subscribe((cities)=>{
    //   this.cities = cities;
    //   console.log(this.cities)
    // })
    // TO BE IMPLMENTED
  }
  // citySearch(city) {
  //   console.log(city)
  //   this.weatherService.searchWeatherForCity(city)
  //   .subscribe((cities)=>{
  //     this.cities = cities;
  //     console.log(this.cities)
  //   })
  //   // TO BE IMPLMENTED
  // }
}
