import {Action} from "@ngrx/store";
import {Cities} from '../../../model/weather'
import { UPDATE_CITIES_ACTION, LOAD_CITIES_ACTION } from "../actions/weather";

export function storeData(state: Cities, action:Action) : Cities {
    switch (action.type)  {
        
        case LOAD_CITIES_ACTION:
        console.log(action.type, state)
        return handleLoadCitiesAction(state, <any>action);
        case UPDATE_CITIES_ACTION:
        // console.log(action.type, action)
        return handleUpdateCitiesAction(state, <any>action);
    default:
    console.log(action.type, state)
        return state;
    }
    
}
function  handleUpdateCitiesAction(state, action){
    console.log(action.type, action.payload.city)
        return action.payload;
}

function  handleLoadCitiesAction(state:Cities, action):Cities{
    return action.payload;
}