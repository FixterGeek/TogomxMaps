import {LISTA_FETCH_SUCCESS} from '../actions/types';
import {TIENDAS_CERCA} from "../actions/PedidosActions";

const INITIAL_STATE = [];

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LISTA_FETCH_SUCCESS:
      return action.payload;
    case TIENDAS_CERCA:
      return action.stores;
    default:
      return state
  }
}
