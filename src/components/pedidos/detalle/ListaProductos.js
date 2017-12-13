import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ListItem, Body, Thumbnail} from 'native-base';
import {Actions} from 'react-native-router-flux';

export const ListaProductos = ({index, p}) => {
  detalleView = () => {
    Actions.Detalle({p: p});
  };

  const {imagenUsuario, Direccion, Pagar} = p;

  return (
    <List>
      <ListItem avatar>
        <Left>
          <Thumbnail source={img}/>
        </Left>
        <Body>
          <Text>Manzana</Text>
          <Text note>2</Text>
        </Body>
        <Right>
          <Text note>$ 50.00</Text>
        </Right>
      </ListItem>
    </List>
  );
};

export default Lista;

const styles = StyleSheet.create({
  touch: {
    flexDirection: 'row'
  },
  body: {
    marginLeft: 10
  }
});
