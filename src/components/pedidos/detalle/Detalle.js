import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, StatusBar, Platform} from 'react-native';
import {Container, Thumbnail, Body, ListItem, Button, List, Right, Left, Icon} from 'native-base';
import Cabecera from '../../comun/Cabecera';
import {store} from '../../../App';
import * as listaActions from '../../../actions/listaActions';
import {Actions} from 'react-native-router-flux';
import {acceptOrder} from '../../../actions/PedidosActions';

const header = Platform.select({
  ios: <Cabecera/>,
});

export default class Detalle extends Component <{}> {
  state = {
    notifications: []
  }

  componentWillMount() {
    this.setState({notifications: store.getState().notifications})
    this.unsubscribe = store.subscribe(() => {
      const {notifications} = store.getState();
      this.setState({notifications});
    })
  }

  guardar = () => {
    const {text} = this.state;
    const item = {
      id: text,
      name: text,
    }
    store.dispatch(listaActions.addItemList(item));
  };

    acceptOrder = () =>{
      store.dispatch(acceptOrder(this.props.o))
          .then(()=> Actions.Map())
          .catch(()=> alert('Falló'))
    };

  render() {
    const {notifications, text} = this.state;
    const {p, o} = this.props;
    console.log(o)
      let products = o.products;
    console.log(products);

    return (
      <Container style={styles.back}>
        {header}
      <StatusBar backgroundColor="orange" barStyle="light-content"/>
      <ScrollView>

          <View>
            <ListItem>
                <Thumbnail square size={80} source={{
                    uri: "https://pbs.twimg.com/profile_images/702616676727033857/faFJSbWF.jpg"
                  }}/>
                <Body style={styles.margin}>
                  <Text><Text style={styles.negrita}>ID:</Text> {o.id}</Text>
                </Body>
            </ListItem>
          </View>
        <ListItem itemDivider>
          <Text>PRODUCTOS</Text>
        </ListItem>

        {
              products.map((p, index) => {
                let image = p.product.image;
              return (
                  <ListItem avatar key={index}>
                    <Left>
                      <Thumbnail source={{uri: image}}/>
                    </Left>
                    <Body>
                    <Text>{p.product.name}</Text>
                    <Text note>Cantidad: {p.amount}</Text>
                    </Body>
                    <Right>
                      <Text note>$ {p.product.price}</Text>
                    </Right>
                  </ListItem>
              )
            })
          }

        </ScrollView>

        <View style={styles.back}>
          <ListItem avatar>
            <Body style={{flexDirection:'row'}}>
            <Text style={styles.letra}>Cantidad de productos</Text>
            <Text note style={styles.letra}>{products.length}</Text>
            </Body>
            <Right>
              <Text style={styles.letra}>Total</Text>
              <Text note style={styles.letra}>{o.total}</Text>
            </Right>
          </ListItem>
      </View>

        <View style={styles.view}>
          <Button style={styles.boton1} onPress={this.acceptOrder}>
            <Text style={styles.texto2}>ACEPTAR</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'white'
  },
  margin: {
    marginLeft: 10
  },
  negrita: {
    fontWeight: 'bold'
  },
  view: {
    flexDirection: 'row'
  },
  boton1: {
    width: '100%',
    backgroundColor: 'green',
    justifyContent: 'center'
  },
  texto2: {
    color: 'white',
    fontSize: 20
  },
  boton2: {
    width: '50%',
    backgroundColor: 'red',
    justifyContent: 'center'
  },
  icon: {
    color: 'white',
    width: 56
  },
  letra: {
  fontWeight: 'bold',
      margin: 5
}
});
