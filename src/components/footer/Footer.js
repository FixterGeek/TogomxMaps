import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Footer, FooterTab, Button, Icon, StyleProvider} from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {Actions} from 'react-native-router-flux';

export default class Map extends Component < {} > {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Footer style={{backgroundColor: 'white'}}>
      <FooterTab>
        <Button vertical onPress={() => Actions.Map()}>
          <Icon name="map"/>
          <Text>Mapa</Text>
        </Button>
        <Button vertical onPress={() => Actions.Tiendas()}>
          <Icon name="cart"/>
          <Text>Tiendas</Text>
        </Button>

        <Button vertical onPress={() => Actions.Pedidos()}>
          <Icon name="menu"/>
          <Text>Pedidos</Text>
        </Button>
      </FooterTab>
    </Footer>
  </StyleProvider>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
