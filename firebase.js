import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBcaQr-uMH7LQcFETQLiXk5LQ1WuG9nrwY",
  authDomain: "togomx-d4928.firebaseapp.com",
  databaseURL: "https://togomx-d4928.firebaseio.com",
  projectId: "togomx-d4928",
  storageBucket: "togomx-d4928.appspot.com",
  messagingSenderId: "87733822528"
};
firebase.initializeApp(config);

export default firebase;

export function toogleTachado(item) {
  item['tachado'] = !item.tachado;
  let updates = {};
  updates['lista/' + item.id] = item;
  return firebase.database().ref().update(updates).then(r => {
    return item;
  }).catch(e => console.log(e))
}

export function saveItem(item) {
  return firebase.database().ref('lista').push(item).then(s => {
    item['id'] = s.key;
    return item;
  }).catch(e => console.log(e))
}

export function removeItem(item) {
  let updates = {};
  updates['lista/' + item.id] = null;
  return firebase.database().ref().update(updates).then(s => {
    return;
  }).catch(e => console.log(e))
}
