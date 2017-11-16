import {combineReducers} from 'redux';
import pedidosReducer from './pedidosReducer';
import ListaReducer from './ListaReducer'
import PedidoReducer from "./PedidoReducer";
import NotiReducer from './NotiReducer';

const rootReducer = combineReducers({
    pedidos: pedidosReducer,
    lista: ListaReducer,
    pedidoForm:PedidoReducer,
    noti: NotiReducer
});

export default rootReducer;
