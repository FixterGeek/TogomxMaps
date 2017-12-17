import React, {Component} from 'react';
import {Root} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';
import Map from './components/map/Map';
import Pedidos from './components/pedidos/Pedidos';
import Tiendas from './components/tiendas/Tiendas';
import Detalle from './components/pedidos/detalle/Detalle';
import Login from './components/login/Login';
import Inicio from './components/login/Inicio';

const Routes = () => {
  return (
    <Root>
    <Router>
      <Scene key="root">
        <Scene key="Inicio" header={null} component={Inicio} initial/>
        <Scene key="Map" header={null} component={Map} />
        <Scene key="Pedidos" header={null} component={Pedidos}  />
        <Scene key="Tiendas" header={null} component={Tiendas} />
        <Scene key="Detalle" header={null} component={Detalle} />
        <Scene key="Login" header={null} component={Login} />
      </Scene>
    </Router>
    </Root>
  );
};

export default Routes;
