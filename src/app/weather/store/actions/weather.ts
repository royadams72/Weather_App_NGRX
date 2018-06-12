import { Action } from '@ngrx/store';
// import {Cites} from '../../../model/weather'
// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX

export const UPDATE_CITIES_ACTION = 'UPDATE_CITIES_ACTION';
export const LOAD_CITIES_ACTION = 'LOAD_CITIES_ACTION';

export class LoadCitiesAction implements Action {

    readonly type = LOAD_CITIES_ACTION;

    constructor(public payload:string) {

    }

}

export class UpdateCitiesAction implements Action {

    readonly type = UPDATE_CITIES_ACTION;

    constructor(public payload:string) {

    }

}

