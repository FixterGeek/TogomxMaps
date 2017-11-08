import {combineReducers} from 'redux';
import pedidosReducer from './pedidosReducer';

const rootReducer = combineReducers({
    pedidos: pedidosReducer,
});

export default rootReducer;
