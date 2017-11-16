import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ListItem, Body, Thumbnail} from 'native-base';
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
        <Body style={styles.body}>
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
  body: {
    marginLeft: 10
  }
});
