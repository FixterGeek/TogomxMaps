import {combineReducers} from 'redux';
import {SET_CURRENT_ORDER} from "../actions/PedidosActions";

function allPedidos(state = [], action) {
  switch (action.type) {
    default: return state;
  }
}

function current(state = {}, action) {
    switch (action.type) {

      case SET_CURRENT_ORDER:
          return action.order

        default:
          return state
    }
}

const pedidosReducer = combineReducers({
  allPedidos
});

export default pedidosReducer;
