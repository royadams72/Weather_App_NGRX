import {Action} from "@ngrx/store";
import {Cities} from '../../../model/weather'
import { UPDATE_CITIES_ACTION, LOAD_CITIES_ACTION } from "../actions/weather";
// import { AppState } from "../app.state";

export function cityWeather(state:Cities[] = [], action:Action) : any {
    switch (action.type)  {
        case LOAD_CITIES_ACTION:
        return  handleLoadCitiesAction(state, action);
        case UPDATE_CITIES_ACTION:
        console.log(state)
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

function  handleLoadCitiesAction(state, action):Cities[]{
    // const newState = Object.assign({},state);
    let newState = action.payload.slice(); 
    console.log(action.payload)
    return newState;
}
