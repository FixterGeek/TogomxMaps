import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBb-2zYHdbZEvn15JS-ZAaFED-Ua4hZ170",
  authDomain: "hardcoders-8009a.firebaseapp.com",
  databaseURL: "https://hardcoders-8009a.firebaseio.com",
  projectId: "hardcoders-8009a",
  storageBucket: "hardcoders-8009a.appspot.com",
  messagingSenderId: "870141507248"
};
firebase.initializeApp(config);

export default firebase;

export function saveItem(item) {
  return firebase.database().ref('lista').push(item).then(s => {
    item['id'] = s.key;
    return item;
  }).catch(e => console.log(e))
}
