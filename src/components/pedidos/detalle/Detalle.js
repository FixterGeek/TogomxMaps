import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';
import {Container, Thumbnail, Body, ListItem, Button} from 'native-base';
import Cabecera from './Cabecera';
import {store} from '../../../App';
import * as listaActions from '../../../actions/listaActions';

export default class Detalle extends Component <{}> {
  state = {
    notifications: []
  }

  componentWillMount() {
    this.setState({notifications: store.getState().notifications})
    this.unsubscribe = store.subscribe(() => {
      const {notifications} = store.getState();
      this.setState({notifications});
    })
  }

  guardar = () => {
    const {text} = this.state;
    const item = {
      id: text,
      name: text,
    }
    store.dispatch(listaActions.addItemList(item));
  };

  render() {
    const {notifications, text} = this.state;
    const {p} = this.props;

    return (
      <Container style={styles.back}>
        <Cabecera/>
        <StatusBar backgroundColor="#802154" barStyle="light-content"/>
        <ScrollView>

          <View>
            <ListItem>
                <Thumbnail square size={80} source={{
                    uri: p.imagenUsuario
                  }}/>
                <Body style={styles.margin}>
                  <Text><Text style={styles.negrita}>Direccion:</Text> {p.Direccion}</Text>
                  <Text note="note"><Text style={styles.negrita}>Total a pagar: </Text>{p.Pagar}</Text>
                </Body>
            </ListItem>
          </View>

        </ScrollView>
        <View style={styles.view}>
          <Button style={styles.boton1} onPress={this.guardar}>
            <Text style={styles.texto2}>ACEPTAR</Text>
          </Button>
          <Button style={styles.boton2}>
            <Text style={styles.texto2}>RECHAZAR</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'white'
  },
  margin: {
    marginLeft: 10
  },
  negrita: {
    fontWeight: 'bold'
  },
  view: {
    flexDirection: 'row'
  },
  boton1: {
    width: '50%',
    backgroundColor: 'green',
    justifyContent: 'center'
  },
  texto2: {
    color: 'white',
    fontSize: 20
  },
  boton2: {
    width: '50%',
    backgroundColor: 'red',
    justifyContent: 'center'
  },
});
