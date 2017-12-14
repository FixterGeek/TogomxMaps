import {combineReducers} from 'redux';
import pedidosReducer from './pedidosReducer';
import ListaReducer from './ListaReducer'
import PedidoReducer from "./PedidoReducer";
import NotiReducer from './NotiReducer';
import OrderReducer from './OrderReducer';
import {positionReducer} from "./positionReducer";

const rootReducer = combineReducers({
  pedidos: pedidosReducer,
  lista: ListaReducer,
  pedidoForm:PedidoReducer,
  noti: NotiReducer,
  orders:OrderReducer,
  position:positionReducer
});

export default rootReducer;
