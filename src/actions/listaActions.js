import firebase from '../Firebase';
import {LISTA_FETCH_SUCCESS, NOTI_FETCH_SUCCESS, ORDER_FETCH_SUCCESS} from './types';
/*import * as fireMethods from '../Firebase';*/

export const listaFetch = () => {
  return(dispatch) => {
    firebase.database().ref('tiendas').on('value', snapshot => {
     // dispatch({type: LISTA_FETCH_SUCCESS, payload: snapshot.val()})
    });
  }
};

export const notiFetch =() =>{
  return(dispatch) => {
    firebase.database().ref('/notifications')
        .on('value', snapshot => {
      dispatch({type: NOTI_FETCH_SUCCESS, payload: snapshot.val()})
    })
  }
}

export const orderFetch =() =>{
    return(dispatch) => {
        firebase.database().ref('ordersP')
            .once('value')
            .then( snapshot => {
              let array = [];
              for (let key in snapshot.val()){
                array.push(snapshot.val()[key])
              }
              dispatch({type: ORDER_FETCH_SUCCESS, orders: array})
            })
    }
}


export const SAVE_POSITION = "SAVE_POSITION"

function savePosition(position) {
    return {
      type: SAVE_POSITION,
        position
    }
}


export const saveSelfPosition = (position) => (dispatch) => {
  const location = {
    coordinates:[
        position.longitude,
        position.latitude
    ]
  };
  fetch('https://togomx.herokuapp.com/deliver/position/',{
    method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(location)
  })
      .then(response=>{
        if (!response.ok){
          console.log('Puto TU', response)
        }
        console.log('Puto Yo', response)
        return;
      })

  dispatch(savePosition(location))
}
