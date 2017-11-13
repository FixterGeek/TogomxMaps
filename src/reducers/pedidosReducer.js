import {combineReducers} from 'redux';

function allPedidos(state = [], action) {
  switch (action.type) {
    default: return state;
  }
}

const pedidosReducer = combineReducers({
  allPedidos
});

export default pedidosReducer;
