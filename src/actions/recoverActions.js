import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {EMAIL_CHANGEDREC, VEMAIL_CHANGEDREC, SEND_EMAIL, SEND_EMAIL_SUCCESS, SEND_EMAIL_FAIL} from './types';

import {Toast} from 'native-base';

export const emailChangedrec = (text) => {
  return {type: EMAIL_CHANGEDREC, payload: text};
};

export const vemailChangedrec = (text) => {
  return {type: VEMAIL_CHANGEDREC, payload: text};
};

export const sendEmail = ({recover}) => {
  let {emailrec, veriemail} = recover
  return(dispatch) => {
    dispatch({type: SEND_EMAIL});
    if (emailrec == veriemail && emailrec != null && veriemail != null) {
      firebase.auth().sendPasswordResetEmail(emailrec)
      .then(user => sendEmailSuccess(dispatch, user)).catch(() => sendEmailFail(dispatch))
    }
  };
};

const sendEmailFail = (dispatch) => {
  dispatch({type: SEND_EMAIL_FAIL});
  Toast.show({text: 'Verifica campos!', position: 'bottom', buttonText: 'Ok', type: 'danger'})
};

const sendEmailSuccess = (dispatch, user) => {
  dispatch({type: SEND_EMAIL_SUCCESS, payload: user});
  Toast.show({text: 'Revisa tu correo y continua', position: 'bottom', buttonText: 'Okay', type: 'success'})
  Actions.Login();
};
