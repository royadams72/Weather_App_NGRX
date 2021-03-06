import { Action } from '@ngrx/store';
import {Cities} from '../../../model/weather'


export const UPDATE_CITIES_ACTION = 'UPDATE_CITIES_ACTION';
export const LOAD_CITIES_ACTION = 'LOAD_CITIES_ACTION';

export class LoadCitiesAction implements Action {

    readonly type = LOAD_CITIES_ACTION;

    constructor(public payload:Cities[]) {
       
    }

}

export class UpdateCitiesAction implements Action {
    readonly type = UPDATE_CITIES_ACTION;
    constructor(public payload:string) {
        // console.log(this.payload)
    }

}

