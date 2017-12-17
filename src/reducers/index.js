import {combineReducers} from 'redux';
import pedidosReducer from './pedidosReducer';
import ListaReducer from './ListaReducer'
import PedidoReducer from "./PedidoReducer";
import NotiReducer from './NotiReducer';
import OrderReducer from './OrderReducer';
import {positionReducer} from "./positionReducer";
import AuthReducer from "./AuthReducer";

const rootReducer = combineReducers({
  pedidos: pedidosReducer,
  tiendas: ListaReducer,
  pedidoForm:PedidoReducer,
  noti: NotiReducer,
  orders:OrderReducer,
  position:positionReducer,
    auth:AuthReducer
});

export default rootReducer;
