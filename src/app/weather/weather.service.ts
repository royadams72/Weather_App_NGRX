import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Weather, Cities  } from '../model/weather';

@Injectable()
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/forecast';
  params = {
    q: '',
    cnt: '8',
    units: 'metric',
    APPID: '010721642521f31b0fbc8c3831d45951'
  };
cities:Array<Cities> = []
  constructor(private http: HttpClient) { }

  searchWeatherForCity(city):Observable<any> {
    // implement the service
    this.params.q = city;
    // console.log(this.params)
    return this.http.get<Weather>(this.url + '/?q='+this.params.q+'&units='+this.params.units+'&cnt='+this.params.cnt+'&APPID='+this.params.APPID)
    .map((data)=>{
      let cityWeather:Cities = {city:city, temps: {temp1:data.list[4].main.temp, temp2:data.list[6].main.temp, temp3:data.list[0].main.temp, temp4:data.list[2].main.temp}}
      this.cities.push(cityWeather);
      return this.cities;
    })
  }

}
