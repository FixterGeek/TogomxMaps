import {combineReducers} from 'redux';
import pedidosReducer from './pedidosReducer';
import listaReducer from './listaReducer'

const rootReducer = combineReducers({
    pedidos: pedidosReducer,
    lista: listaReducer,
});

export default rootReducer;
