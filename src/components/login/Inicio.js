import React, {Component} from 'react';
import firebase from '../../Firebase';
import {Container} from 'native-base';
import Login from './Login'
import Map from "../map/Map";

class Inicio extends Component {
    state = {
        loggedIn: null
    };

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true})
            } else {
                this.setState({loggedIn: false})
            }
        });
    }

    render() {
        return (
            <Container>
                {this.state.loggedIn
                    ? <Map/>
                    : <Login/>}
            </Container>
        );
    }
}

export default Inicio;