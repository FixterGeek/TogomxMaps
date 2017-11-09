import {initialState} from "../store/initialState";

export default function listaReducer(state=initialState, action){
    switch (action.type){
        case "LOAD_LISTA_SUCCESS":
            return action.lista;
        default:
            return state;
    }
}