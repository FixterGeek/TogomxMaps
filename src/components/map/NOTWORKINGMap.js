import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions, Platform} from 'react-native';
import MapView from 'react-native-maps';
import {connect} from 'react-redux';
import {listaFetch} from '../../actions/listaActions';
import {notiFetch, saveSelfPosition} from '../../actions/listaActions';
import _ from 'lodash';
import Cabecera from '../comun/Cabecera';
import Footer from '../footer/Footer';

const {width, height} = Dimensions.get('window');
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RADIO = width / height;
const LATITUDE_DELTA = 0.0150;
const LONGTITUDE_DELTA = LATITUDE_DELTA * ASPECT_RADIO;

const header = Platform.select({
  ios: <Cabecera/>,
});

class Map extends Component <{}> {
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: {
        latitude: 20.104989,
        longitude: -98.756323,
        longitudeDelta: 0.0043,
        latitudeDelta: 0.0034
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      }
    }
  };

  watchID: ? number = null;

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude);
      var long = parseFloat(position.coords.longitude);

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGTITUDE_DELTA
      };

      this.setState({initialPosition: initialRegion});
      this.setState({markerPosition: initialRegion})
    }, (error) => console.log(error), {
      enableHighAccuracy: true,
      timeout: 200000,
      maximumAge: 10000
    });

    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lat = parseFloat(position.coords.latitude);
      var long = parseFloat(position.coords.longitude);

      var lastRegion = {
        latitude: lat,
        longitude: long,
        longitudeDelta: LONGTITUDE_DELTA,
        latitudeDelta: LATITUDE_DELTA
      }
      this.setState({initialPosition: lastRegion})
      this.setState({markerPosition: lastRegion})
        this.props.saveSelfPosition(lastRegion)
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  componentWillMount(){
    this.props.listaFetch();
    this.props.notiFetch();
  }

  render(){
    const {lista, noti} = this.props;
    console.log(lista);
      console.log(noti);
    return (
      <View style={styles.container}>
        {header}
          <MapView
            style={styles.container}
            provider={MapView.PROVIDER_GOOGLE}
            region={this.state.initialPosition}>
              <MapView.Marker coordinate={this.state.markerPosition}>
                  <View style={styles.radius}>
                      <View style={styles.marker}/>
                  </View>
              </MapView.Marker>

              {
                  lista.map((lista, index) => {
                      let n=noti.find(noti=>noti.tiendaId===lista.owner);
                      if(n===undefined){
                          n={has:false}
                      }
                      if(n.has===true){
                          color='green'
                      }
                      if(n.has===false){
                          color='red'
                      }
                      return (
                          <MapView.Marker key={index} coordinate={lista.coord} pinColor={color} title={lista.title}/>
                      )
                  })
              }

          </MapView>
          <Footer/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const lista = _.map(state.lista, (val, uid)=>{
     return {...val, uid};
  });

  const noti = _.map(state.noti, (val, uid)=>{
      return {...val, uid};
  });
  return{lista, noti};
};

export default connect (mapStateToProps, {listaFetch, notiFetch, saveSelfPosition})(Map);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,112,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0,112,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    overflow: 'hidden',
    backgroundColor: '#337ab7',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2
  }
});
