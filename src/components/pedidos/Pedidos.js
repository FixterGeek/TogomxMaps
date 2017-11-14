import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import PedidoLista from './Lista/PedidoLista';
import {Container} from 'native-base';
import Footer from '../footer/Footer';

class Pedidos extends Component {
  render() {
    return (
      <Container style={styles.back}>
        <PedidoLista/>
        <Footer/>
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
