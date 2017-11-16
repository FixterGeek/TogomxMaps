import firebase from '../Firebase';
import {LISTA_FETCH_SUCCESS, NOTI_FETCH_SUCCESS} from './types';
/*import * as fireMethods from '../Firebase';*/

export const listaFetch = () => {
  return(dispatch) => {
    firebase.database().ref('tiendas').on('value', snapshot => {
      dispatch({type: LISTA_FETCH_SUCCESS, payload: snapshot.val()})
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














/*
export function loadListaSuccess(notifications) {
  return {type: 'LOAD_LISTA_SUCCESS', notifications}
}
*/


/*
export function addItemListSuccess(item) {
  return {type: "ADD_ITEM_LIST", item}
}

export function loadLista() {
  return function(dispatch, getState) {
    firebase.database().ref('notifications').once("value").then(s => {
      let notifications = [];
      const obj = s.val();
      for (let key in obj) {
        let nObj = obj[key];
        nObj['id'] = key;
        notifications.push(nObj);
      }
      dispatch(loadListaSuccess(notifications));
    }).catch(e => console.log(e))
  }
}

export function addItemList(item) {
  return function(dispatch) {
    fireMethods.saveItem(item).then(resItem => {
      dispatch.addItemListSuccess(resItem)
    })
  }
}
*/
