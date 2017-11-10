import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import {List, ListItem, Body, Thumbnail} from 'native-base';
import {Actions} from 'react-native-router-flux';

export const Lista = ({index, p}) => {
  detalleView = () => {
    Actions.Detalle({p: p});
  };

  const {imagenUsuario, Direccion, Pagar} = p;

  return (
    <ListItem>
      <TouchableOpacity onPress={this.detalleView} style={styles.touch}>
        <Thumbnail square size={80} source={{
            uri: imagenUsuario
          }}/>
        <Body style={{marginLeft: 10}}>
          <Text>Direccion: {Direccion}</Text>
          <Text note="note">{Pagar}</Text>
        </Body>
      </TouchableOpacity>
    </ListItem>
  );
};

export default Lista;

const styles = StyleSheet.create({
  touch: {
    flexDirection: 'row'
  },
});
