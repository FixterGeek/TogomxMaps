import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import {connect} from 'react-redux';
import {listaFetch} from '../../actions/listaActions';
import _ from 'lodash';
import {CardT} from './CardT';
import Footer from '../footer/Footer';

class ListExample extends Component {
  componentWillMount() {
    this.props.listaFetch();
  }

  render() {
    const {lista} = this.props;

    return (
      <Container style={styles.back}>
        <Content>
          {lista.map((lista, index) => <CardT key={index} lista={lista}/>)}
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
  return {lista};
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'white'
  }
});

export default connect(mapStateToProps, {listaFetch})(ListExample);
