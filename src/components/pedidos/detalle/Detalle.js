import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, StatusBar, Platform} from 'react-native';
import {Container, Thumbnail, Body, ListItem, Button, List, Right, Left, Icon} from 'native-base';
import Cabecera from '../../comun/Cabecera';
import {store} from '../../../App';
import * as listaActions from '../../../actions/listaActions';
import {Actions} from 'react-native-router-flux';

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

  render() {
    const {notifications, text} = this.state;
    const {p} = this.props;

    return (
      <Container style={styles.back}>
        {header}
      <StatusBar backgroundColor="orange" barStyle="light-content"/>
      <ScrollView>

          <View>
            <ListItem>
                <Thumbnail square size={80} source={{
                    uri: p.imagenUsuario
                  }}/>
                <Body style={styles.margin}>
                  <Text><Text style={styles.negrita}>Direccion:</Text> {p.Direccion}</Text>
                </Body>
            </ListItem>
          </View>

          {/*{
            allProducts.map((p, index) => {
              return <ListaProductos key={index} index={index} p={p}/>
            })
          }*/}

        </ScrollView>

        <View style={styles.back}>
          <ListItem avatar>
            <Left>
              <Icon name="cart" style={styles.icon}/>
            </Left>
            <Body>
            <Text style={styles.letra}>Cantidad de productos</Text>
            <Text note style={styles.letra}>5</Text>
            </Body>
            <Right>
              <Text style={styles.letra}>Total</Text>
              <Text note style={styles.letra}>{p.Pagar}</Text>
            </Right>
          </ListItem>
      </View>

        <View style={styles.view}>
          <Button style={styles.boton1} onPress={()=>Actions.Map()}>
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
  fontWeight: 'bold'
}
});
