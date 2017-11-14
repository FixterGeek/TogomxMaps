import React, {Component} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Container, Content, ListItem, Thumbnail, Body, Text} from 'native-base';
import {connect} from 'react-redux';
import {listaFetch} from '../../actions/listaActions';
import {pedidoCreate} from '../../actions/PedidosActions'
import _ from 'lodash';
import {CardT} from './CardT';
import Footer from '../footer/Footer';

class ListExample extends Component {
  componentWillMount() {
    this.props.listaFetch();
  }


    onTiendaPress=(key)=>{
      const {visto, items, tiendaId } = this.props;
      this.props.pedidoCreate({items:[{cantidad:'2', producto:'rancheritos'}],visto, tiendaId:key })
    }

  render() {
    const {lista} = this.props;

    return (
      <Container style={styles.back}>
        <Content>
          {/*{lista.map((lista, index) => <CardT key={index} lista={lista} />)}*/}
            {lista.map((lista, index) => {
              return(

              <ListItem key={index} onPress={()=>Alert.alert(
                  'PEDIDO',
                  '¿Deseas confirmar pedido con está tienda?',
                  [
                      {text: 'OK', onPress: ()=>this.onTiendaPress(lista.owner)},
                      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  ],
                  { cancelable: false }
              )}>
                    <Thumbnail square size={80} source={{
                        uri: 'https://pbs.twimg.com/profile_images/916006979365040128/DcY8jSuo.jpg'
                    }}/>
                    <Body>
                    <Text>{lista.title}</Text>
                    <Text note="note">{lista.direccion}</Text>
                    </Body>
                  </ListItem>
              )

                }
            )}
        </Content>
        <Footer/>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  const lista = _.map(state.lista, (val, uid) => {
    return {
      ...val,
      uid
    };
  });

  const {visto, items, tiendaId} = state.pedidoForm;
    return {lista, visto, items, tiendaId};
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'white'
  }
});

export default connect(mapStateToProps, {listaFetch, pedidoCreate})(ListExample);
