import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, StatusBar} from 'react-native';
import {Container, Thumbnail, Body, List, ListItem, CardItem, Button} from 'native-base';
import Select from './Select';
import img from '../../../assets/imgs/comida.jpg';
import Cabecera from './Cabecera'

export default class Detalle extends Component <{}> {
  render() {
    const {p} = this.props;
    return (
      <Container>
      <Cabecera/>
      <StatusBar backgroundColor="#802154" barStyle="light-content"/>
      <ScrollView>
        <List style={styles.list}>
            <ListItem>
              <Body>
                <Text style={styles.text1}>Imagen</Text>
              </Body>
              <Body>
                <Text style={styles.text1}>Nombre</Text>
              </Body>
              <Body>
                <Text style={styles.text1}>Precio U</Text>
              </Body>
              <Body>
                <Text style={styles.text1}>Cantidad</Text>
              </Body>
              <Body>
                <Text style={styles.total}>Total</Text>
              </Body>
            </ListItem>
          </List>

          <ScrollView>
            <List>
              <ListItem>
                <Thumbnail square size={80} source={img}/>
                <Body>
                  <Text>Manzanas</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
                <Select/>
                <Body>
                  <Text style={styles.totalP}>$25.00</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Thumbnail square size={80} source={img}/>
                <Body>
                  <Text>Manzanas</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
                <Select/>
                <Body>
                  <Text style={styles.totalP}>$25.00</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Thumbnail square size={80} source={img}/>
                <Body>
                  <Text>Manzanas</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
                <Select/>
                <Body>
                  <Text style={styles.totalP}>$25.00</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Thumbnail square size={80} source={img}/>
                <Body>
                  <Text>Manzanas</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
                <Select/>
                <Body>
                  <Text style={styles.totalP}>$25.00</Text>
                </Body>
              </ListItem>
            </List>
          </ScrollView>

      </ScrollView>
      <Button style={styles.boton}>
        <Text style={styles.texto2}>ACEPTAR</Text>
      </Button>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
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
  boton: {
    width: '100%',
    backgroundColor: '#802154',
    justifyContent: 'center'
  }
});
