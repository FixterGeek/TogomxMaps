import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import PedidoLista from './Lista/PedidoLista';
import {Container} from 'native-base';

class Pedidos extends Component {
  render() {
    return (
      <Container style={styles.back}>
        <PedidoLista/>
      </Container>
    );
  };
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'white'
  }
});

function mapStateToProps({reducer}) {
  return{reducer}
}

export default Pedidos = connect(mapStateToProps)(Pedidos);
