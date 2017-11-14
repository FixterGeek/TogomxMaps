import {combineReducers} from 'redux';
import pedidosReducer from './pedidosReducer';
import ListaReducer from './ListaReducer'
import PedidoReducer from "./PedidoReducer";

const rootReducer = combineReducers({
    pedidos: pedidosReducer,
    lista: ListaReducer,
    pedidoForm: PedidoReducer
});

export default rootReducer;
