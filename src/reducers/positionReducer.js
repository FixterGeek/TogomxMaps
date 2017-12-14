import {combineReducers} from 'redux';
import {SAVE_POSITION} from "../actions/listaActions";

function position(state = {}, action) {
    switch (action.type){

        case SAVE_POSITION:
            return action.position;
        default:
            return state;
    }
}

export const positionReducer = combineReducers({
   position
});