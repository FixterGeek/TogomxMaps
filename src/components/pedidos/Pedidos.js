import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Thumbnail, Button, Icon, Body, List, ListItem, CardItem} from 'native-base';
import Footer from '../footer/Footer';
import img from '../../assets/imgs/comida.jpg';
import Select from './Select';

export default class Pedidos extends Component < {} > {
  render() {
    return (<View style={styles.container}>
      <List style={styles.list}>
        <ListItem>
          <Thumbnail source={{
              uri: 'https://avatars2.githubusercontent.com/u/20559576?s=460&v=4'
            }}/>
          <Text style={{marginLeft: 10}}>Usuario: {'\n'}Saul Sandoval M</Text>
        </ListItem>
      </List>

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
        </ListItem>
      </List>

      <ScrollView>
        <List>
          <ListItem>
            <Body>
            <Thumbnail square size={80} source={img}/>
            </Body>
            <Body>
              <Text>Manzanas</Text>
            </Body>
            <Body>
              <Text>$25.00</Text>
            </Body>
            <Select/>
          </ListItem>

          <ListItem>
            <Body>
            <Thumbnail square size={80} source={img}/>
            </Body>
            <Body>
              <Text>Manzanas</Text>
            </Body>
            <Body>
              <Text>$25.00</Text>
            </Body>
            <Select/>
          </ListItem>

          <ListItem>
            <Body>
            <Thumbnail square size={80} source={img}/>
            </Body>
            <Body>
              <Text>Manzanas</Text>
            </Body>
            <Body>
              <Text>$25.00</Text>
            </Body>
            <Select/>
          </ListItem>

          <ListItem>
            <Body>
            <Thumbnail square size={80} source={img}/>
            </Body>
            <Body>
              <Text>Manzanas</Text>
            </Body>
            <Body>
              <Text>$25.00</Text>
            </Body>
            <Select/>
          </ListItem>
        </List>
      </ScrollView>

      <View style={styles.card}>
        <CardItem style={styles.cardItem}>
          <Text>Debe Pagar</Text>
          <Text style={styles.pago}>$500.00 MXN</Text>
        </CardItem>

        <Button block style={styles.boton}>
          <Text style={styles.text}>Entregada</Text>
        </Button>
      </View>
      <Footer/>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  text1: {
    color: 'black',
    fontWeight: 'bold'
  },
  total: {
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold'
  },
  totalP: {
    marginLeft: 15
  },
  boton: {
    backgroundColor: 'black',
    width: '100%'
  },
  list: {
    backgroundColor: 'white'
  },
  cardItem: {
    alignSelf: 'center',
    flexDirection: 'column'
  },
  pago: {
    fontSize: 20
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  fondo: {
    backgroundColor: 'white'
  }
});
