import {PEDIDO_CREATE} from './types';
import firebase from '../Firebase';

export const pedidoCreate = ({visto, items, tiendaId}) => {

  return (dispatch) => {
    firebase.database().ref(`/notifications`)
      .push({visto, items, tiendaId})
      .then(() => {
          dispatch({type: PEDIDO_CREATE});
      });
  };
};

export const TIENDAS_CERCA = "TIENDAS_CERCA";
export const SET_CURRENT_ORDER = "SET_CURRENT_ORDER";

function setNearStores(stores) {
  return {
    type: TIENDAS_CERCA,
    stores
  }
}

function setCurrentOrder(order) {
  return {
    type: SET_CURRENT_ORDER,
    order
  }
}

export const acceptOrder = (order)=> (dispatch, getState)=>{
  dispatch(setCurrentOrder(order));
  let position = getState().position;
  if(Object.keys(position).length < 1) return;
  const deliver = {
      order,
    ...position
  };

  return fetch('https://togomx.herokuapp.com/orders/deliver/',{
    //return fetch("https://togomx.herokuapp.com/stores/",{
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(deliver)
  })
    .then(response =>{
      console.log('Respuesta: ', response)
      if(!response.ok) throw new Error(response.statusText);
      return response.json()
    })
    .then(data =>{
      dispatch (setNearStores(data));
      console.log(data);
      return Promise.resolve(data);
    })
      .catch(e=>Promise.reject(e));
};
