import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WeatherContainer } from './weather.container';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, Store } from '@ngrx/store';
import { cityWeather } from './store/reducers/weather';
import { Cities } from '../model/weather';

export const reducers = {
  cityWeather
  };
describe('WeatherContainer', () => {
  let component: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;
  let store: Store<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherContainer ],
      imports: [HttpClientModule, StoreModule.forRoot(reducers)],
      providers:[WeatherService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainer);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
    store.dispatch({type: 'UPDATE_CITIES_ACTION', payload: 'London' })
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('store to be defined', () => {
    expect(store).toBeDefined();
  });
  it('cities observable to be defined', () => {
    store.dispatch({type: 'UPDATE_CITIES_ACTION', payload: 'London' })
    console.log(component.cities$)
    expect(component.cities$).toBeDefined();
  });

  // PLEASE IMPLEMENT MORE TESTS
});
