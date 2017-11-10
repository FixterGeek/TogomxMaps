import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, StatusBar} from 'react-native';
import {Container, Thumbnail, Body, List, ListItem, CardItem, Button} from 'native-base';
import img from '../../../assets/imgs/comida.jpg';
import Cabecera from './Cabecera'

export default class Detalle extends Component <{}> {
  render() {
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
      <View style={{flexDirection: 'row'}}>
        <Button style={styles.boton1}>
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
  img: {
    width: '100%',
    height: 200
  },
  h1: {
    alignSelf: 'center'
  },
  text: {
    fontSize: 18,
    margin: 20
  },
  texto2: {
    color: 'white',
    fontSize: 20
  },
  boton1: {
    width: '50%',
    backgroundColor: 'green',
    justifyContent: 'center'
  },
  boton2: {
    width: '50%',
    backgroundColor: 'red',
    justifyContent: 'center'
  },
  margin: {
    marginLeft: 10
  },
  negrita: {
    fontWeight: 'bold'
  }
});
