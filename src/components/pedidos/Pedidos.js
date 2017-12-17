import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {ListItem, Body, Thumbnail} from 'native-base';
import {connect} from 'react-redux';
import PedidoLista from './Lista/PedidoLista';
import {Container} from 'native-base';
import {orderFetch} from "../../actions/listaActions";
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';
import Cabecera from "../comun/Cabecera";

class Pedidos extends Component {
    componentWillMount(){
        this.props.orderFetch();
    }
    render() {
        let {orders} = this.props
        console.log(orders)
    return (
      <Container style={styles.back}>
          <Cabecera/>

          {
            orders.map((o,index) => {
              console.log(o);
                let date=new Date(o.date)
                let nDate = date.toDateString();
                console.log(date.toDateString())

                return (
                  <ListItem key={index}>
                    <TouchableOpacity onPress={()=>Actions.Detalle({o:o})} style={styles.touch}>
                      <Thumbnail square size={80} source={{
                          uri: "https://pbs.twimg.com/profile_images/702616676727033857/faFJSbWF.jpg"
                      }}/>
                      <Body style={styles.body}>
                      <Text>ID:{o.id}  </Text>
                      <Text note="note">DATE: {nDate}</Text>
                      </Body>
                    </TouchableOpacity>
                  </ListItem>
                )
            })
          }
      </Container>
    );
  };
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'white'
  },
    touch: {
        flexDirection: 'row'
    },
    body: {
        marginLeft: 10
    }
});

const mapStateToProps = state => {
    console.log(state)
  return {
    orders: state.orders
  }
};

export default Pedidos = connect (mapStateToProps, {orderFetch})(Pedidos);
