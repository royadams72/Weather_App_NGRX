import {Action} from "@ngrx/store";
import {Cities} from '../../../model/weather'
import { UPDATE_CITIES_ACTION, LOAD_CITIES_ACTION } from "../actions/weather";
import { AppState } from "../app.state";

export function storeData(state = [], action:Action)  {
    switch (action.type)  {
        case LOAD_CITIES_ACTION:
        // console.log(action)
        return  handleLoadCitiesAction(state, action);
     
       
        case UPDATE_CITIES_ACTION:
        console.log(state)
        return handleUpdateCitiesAction(state, action);
    default:
 
        return state;
    }
    
}
function  handleUpdateCitiesAction(state, action){
    console.log(state, action.payload)
        return state;
}

function  handleLoadCitiesAction(state, action){
    // console.log(state, action.payload)
    const newState:AppState = Object.assign(state,action.payload);
    console.log(newState)
    return newState;
}