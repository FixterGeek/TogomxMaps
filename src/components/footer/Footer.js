import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Footer, FooterTab, Button, Icon, StyleProvider} from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {Actions} from 'react-native-router-flux';
import firebase from '../../Firebase';

export default class Map extends Component < {} > {
    signOut=()=>{
      firebase.auth().signOut();
    };
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Footer style={styles.back}>
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
          <Icon name="ios-document"/>
          <Text>Pedidos</Text>
        </Button>
        <Button vertical onPress={()=>this.signOut()}>
          <Icon name="ios-close"/>
          <Text>Salir</Text>
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
  },
  back: {
    backgroundColor: 'white'
  }
});
