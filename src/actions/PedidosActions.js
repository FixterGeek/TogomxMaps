import {PEDIDO_CREATE} from './types';
import firebase from '../Firebase';

export const pedidoCreate = ({visto, items, tiendaId}) =>{

    return (dispatch) => {
        firebase.database().ref(`/notifications`)
            .push({visto, items, tiendaId})
            .then(() => {
                dispatch({type: PEDIDO_CREATE});
            });
    };
};