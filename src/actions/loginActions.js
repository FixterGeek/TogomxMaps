import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER} from './types';
import {Toast} from 'native-base';

export const emailChanged = (text) => {
  return {type: EMAIL_CHANGED, payload: text};
};

export const passwordChanged = (text) => {
  return {type: PASSWORD_CHANGED, payload: text};
};

export const loginUser = ({auth}) => {
  let {password, email} = auth
  return(dispatch) => {
    dispatch({type: LOGIN_USER});
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user)).catch(() => loginUserFail(dispatch))
  };
};

const loginUserFail = (dispatch) => {
  dispatch({type: LOGIN_USER_FAIL});
  Toast.show({text: 'Autenticación Fallida!', position: 'bottom', buttonText: 'Ok', type: 'danger'})
};

const loginUserSuccess = (dispatch) => {
  dispatch({type: LOGIN_USER_SUCCESS});
  Toast.show({text: 'Bienvenido!', position: 'bottom', buttonText: 'Okay', type: 'success'})
  Actions.Principal();
};
