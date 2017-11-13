import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Routes from './Routes';
import {loadLista} from './actions/listaActions';

export const store = configureStore();
store.dispatch(loadLista());

export default class App extends Component < {} > {
  render() {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    );
  }
}
