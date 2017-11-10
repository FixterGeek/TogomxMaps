import {combineReducers} from 'redux';
import pedidosReducer from './pedidosReducer';
import ListaReducer from './ListaReducer'

const rootReducer = combineReducers({
    pedidos: pedidosReducer,
    lista: ListaReducer,
});

export default rootReducer;
