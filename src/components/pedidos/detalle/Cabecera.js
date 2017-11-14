import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Header, Left, Icon, Body, Right} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class Cabecera extends Component {
  render() {
    return (
      <Header style={styles.header}>
        <Left>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Icon name='ios-arrow-back' style={styles.color}/>
          </TouchableOpacity>
        </Left>
        <Body/>
        <Right/>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#802154'
  },
  color: {
    color: "white"
  },
});
