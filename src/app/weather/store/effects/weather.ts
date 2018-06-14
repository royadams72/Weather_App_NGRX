// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX
import { Injectable } from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import 'rxjs/add/operator/switchMap';
import { WeatherService } from '../../weather.service';
import { UpdateCitiesAction, UPDATE_CITIES_ACTION, LoadCitiesAction } from '../actions/weather';
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";



@Injectable()
export class WeatherEffects {
  constructor(private actions$: Actions, private weatherService: WeatherService) {}

  @Effect() cityWeather$: Observable<Action> = this.actions$
      .ofType<UpdateCitiesAction>(UPDATE_CITIES_ACTION)
    //   .debug("action received")
      .switchMap(action => {
          console.log(action)
          return this.weatherService.searchWeatherForCity(action.payload)
        })
    //   .debug("data received via the HTTP request")
    .map(cities =>  {
        // console.log(cities);
        return new LoadCitiesAction(cities)
    });
   
    // new UserThreadsLoadedAction(allUserData)
}
