import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {
  EMAIL_CHANGEDREG,
  PASSWORD_CHANGEDREG,
  LOGIN_USER_SUCCESSREG,
  LOGIN_USER_FAILREG,
  LOGIN_USERREG,
  NAME_CHANGEDREG,
  DIRECCION_CHANGEDREG,
  INFO_USER,
  PHONE_CHANGEDRED
} from './types';
import {Toast} from 'native-base';

export const emailChangedreg = (text) => {
  return {type: EMAIL_CHANGEDREG, payload: text};
};

export const passwordChangedreg = (text) => {
  return {type: PASSWORD_CHANGEDREG, payload: text};
};

export const nameChangedreg = (text) => {
  return {type: NAME_CHANGEDREG, payload: text};
};

export const direccionChangedreg = (text) => {
  return {type: DIRECCION_CHANGEDREG, payload: text}
}

export const phoneChangedreg = (text) => {
  return {type: PHONE_CHANGEDRED, payload: text}
}

export const loginUserreg = ({regis}) => {
  console.log(regis)
  let {email, password, names, direccion, phone} = regis
  return(dispatch) => {
    dispatch({type: LOGIN_USERREG});
    firebase.auth().createUserWithEmailAndPassword(email, password).
      then(user => loginUserSuccessreg(dispatch, user)).then(() => {
        firebase.database().ref().child('dev/users').push({email, names, direccion, phone}).then(() => {
          dispatch({type: INFO_USER})
      })
    }).catch(() => loginUserFailreg(dispatch))
  };
};

const loginUserFailreg = (dispatch) => {
  dispatch({type: LOGIN_USER_FAILREG});
  Toast.show({text: 'Verifica campos!', position: 'bottom', buttonText: 'Ok', type: 'danger'})
};

const loginUserSuccessreg = (dispatch, user) => {
  dispatch({type: LOGIN_USER_SUCCESSREG, payload: user});
  Actions.Principal();
  Toast.show({text: 'Bienvenido!', position: 'bottom', buttonText: 'Ok', type: 'success'})
};
