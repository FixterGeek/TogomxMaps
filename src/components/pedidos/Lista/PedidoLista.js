import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {StatusBar} from 'react-native';
import Lista from './Lista';
import {Content} from 'native-base';

class PedidoLista extends Component {
  state = {
    allPedidos: []
  };

  componentWillMount() {
    const {allPedidos} = this.props;
    this.setState({allPedidos});
  };

  render() {
    const {allPedidos} = this.state;
    return (
      <Content>
        <StatusBar backgroundColor="#802154" barStyle="light-content"/>
        {
          allPedidos.map((p, index) => {
            return <Lista key={index} index={index} p={p}/>
          })
        }
    </Content>
    );
  };
};

function mapStateToProps(state, ownProps) {
  return {allPedidos: state.pedidos.allPedidos};
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(dispatch)};
}

export default PedidoLista = connect(mapStateToProps, mapDispatchToProps)(PedidoLista);
