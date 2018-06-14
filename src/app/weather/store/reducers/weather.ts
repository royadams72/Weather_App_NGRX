import {Action} from "@ngrx/store";
import {Cities} from '../../../model/weather'
import { UPDATE_CITIES_ACTION, LOAD_CITIES_ACTION } from "../actions/weather";

export function storeData(state: Cities[] = [], action:Action) : Cities[] {
    switch (action.type)  {
        case LOAD_CITIES_ACTION:
        console.log(action)
        return handleLoadCitiesAction(state, action);
        case UPDATE_CITIES_ACTION:
        return handleUpdateCitiesAction(state, action);
    default:
 
        return state;
    }
    
}
function  handleUpdateCitiesAction(state, action):Cities[]{
    //Must always return the state
    console.log(state, action.payload)
        return state;
}

function  handleLoadCitiesAction(state:Cities[], action):Cities[]{
    // const newState = Object.assign(state,action.payload);
    // console.log(newState)
    return action.payload;
}