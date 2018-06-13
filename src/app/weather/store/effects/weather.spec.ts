import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { cold, hot, getTestScheduler } from 'jasmine-marbles';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { StoreModule, Store } from '@ngrx/store';
import { WeatherEffects } from './weather';
import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('WeatherEffects', () => {
    // let component: WeatherContainer;
    let store: Store<any>;
    let weatherService:WeatherService;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers:[WeatherService],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
        weatherService = TestBed.get(WeatherService);
    //   fixture = TestBed.createComponent(WeatherContainer);
    //   component = fixture.componentInstance;
    //   store = fixture.debugElement.injector.get(Store);
    //   store.dispatch({type: 'UPDATE_CITIES_ACTION', payload: 'London' })
    //   fixture.detectChanges();
    });
  
    it('should create', () => {
        const source = cold('a', { a: { type: 'UPDATE_CITIES_ACTION' } });
       const effects = new WeatherEffects(new Actions(source), weatherService);
       console.log(effects.cityWeather$)
    //    const expected = cold('a', { a: { type: 'UPDATE_CITIES_ACTION' } });
    //    expect(effects.cityWeather$).toBeObservable(expected)
    //   expect(component).toBeTruthy();
    });
   
  
    // PLEASE IMPLEMENT MORE TESTS
  });