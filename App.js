import React, {Component} from 'react';
import {Root} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';
import Map from './src/components/map/Map';
import Pedidos from './src/components/pedidos/Pedidos';
import Tiendas from './src/components/tiendas/Tiendas';

const Routes = () => {
  return (
    <Root>
    <Router>
      <Scene key="root">
        <Scene key="Map" header={null} component={Map} initial/>
        <Scene key="Pedidos" header={null} component={Pedidos} />
        <Scene key="Tiendas" header={null} component={Tiendas} />
      </Scene>
    </Router>
    </Root>
  );
};

export default Routes;
