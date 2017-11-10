import React, {Component} from 'react';
import {Container, Content, List, ListItem, Text, Thumbnail, Body} from 'native-base';
import {View} from 'react-native';
import Footer from '../footer/Footer';
import {connect} from 'react-redux';
import {listaFetch} from "../../actions/listaActions";
import _ from 'lodash';
import {CardT} from "./CardT";

class ListExample extends Component {
    componentWillMount(){
        this.props.listaFetch();
    }
  render() {
      const {lista} = this.props;
    return (
    <View>
        {lista.map((lista,index)=><CardT
            key={index}
            lista={lista}
        />)}
    </View>
  );
  }
}
  const mapStateToProps = state => {
      const lista = _.map(state.lista, (val, uid)=>{
      return {...val, uid};
  });
      return{lista};
  };


  export default connect (mapStateToProps, {listaFetch})(ListExample);
