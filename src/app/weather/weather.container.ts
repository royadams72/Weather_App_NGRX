import { Component, OnInit, Output } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherList } from '../model/weather';
@Component({
  selector: 'app-weather',
  template: `
  <app-search (onSearchCity)="citySearch($event)"></app-search>
  <app-results [cities]="cities"></app-results>  `
})
export class WeatherContainer {
  cities:Array<any> = [];

  constructor(private weatherService: WeatherService) {}

  citySearch(city) {
    console.log(city)
    this.weatherService.searchWeatherForCity(city)
    .subscribe((cities)=>{
      this.cities = cities;
      console.log(this.cities)
    })
    // TO BE IMPLMENTED
  }
}
