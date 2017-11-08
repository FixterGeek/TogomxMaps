import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Footer from '../footer/Footer';
import MapView from 'react-native-maps';

const {width,height} = Dimensions.get('window');

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RADIO = width / height;
const LATITUDE_DELTA = 0.0150;
const LONGTITUDE_DELTA = LATITUDE_DELTA * ASPECT_RADIO;

export default class Map extends Component < {} > {
    constructor(props){
        super(props);
        this.state={
            initialPosition:{
                latitude:20.104989,
                longitude:-98.756323,
                longitudeDelta:0.0043,
                latitudeDelta:0.0034
            },
            markerPosition:{
                latitude:0,
                longitude:0,
            },

            marker1:{
                latitude:20.136090,
                longitude:-98.803441,
            },
            marker2:{
                latitude:20.135465,
                longitude:-98.806708,
            },
            marker3:{
                latitude:20.136009,
                longitude:-98.800898,
            },
            marker4:{
                latitude:20.132665,
                longitude:-98.805978,
            },
            marker5:{
                latitude:20.137248,
                longitude:-98.802389,
            },

        }
    };

    watchID: ?number = null;

    componentDidMount(){
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
            this.setState({markerPosition: initialRegion});
        },
            (error) => console.log(error),
            {enableHighAccuracy: true, timeout: 200000, maximumAge:10000});

        this.watchID = navigator.geolocation.watchPosition((position) =>
        {
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
        });
    }

    componentWillUnmount(){
        navigator.geolocation.clearWatch(this.watchID)
    }


  render(){
    return (
      <View style={styles.container}>
        <MapView
          style={{flex: 1}}
          provider={MapView.PROVIDER_GOOGLE}
          region={this.state.initialPosition}
          >
            <MapView.Marker
                coordinate={this.state.markerPosition}
            >

                <View style={styles.radius}>
                    <View style={styles.marker}/>
                </View>
            </MapView.Marker>

            <MapView.Marker
                coordinate={this.state.marker1}
                pinColor={'red'}
                title="Miscelanea la Chiquita"
            />
            <MapView.Marker
                coordinate={this.state.marker2}
                pinColor={'red'}
                title="Don Tacho"
            />
            <MapView.Marker
                coordinate={this.state.marker3}
                pinColor={'red'}
                title="Residente"
            />
            <MapView.Marker
                coordinate={this.state.marker4}
                pinColor={'red'}
                title="El negro"
            />
            <MapView.Marker
                coordinate={this.state.marker5}
                pinColor={'red'}
                title="Miscelanea Juanita"
            />



        </MapView>
        <Footer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
    radius:{
      height:50,
        width: 50,
        borderRadius: 50/2,
        overflow:'hidden',
        backgroundColor:'rgba(0,112,255,0.1)',
        borderWidth:1,
        borderColor:'rgba(0,112,255,0.3)',
        alignItems:'center',
        justifyContent:'center'
    },
    marker:{
        height:20,
        width: 20,
        overflow:'hidden',
        backgroundColor:'#337ab7',
        borderWidth:3,
        borderColor:'white',
        borderRadius: 20/2
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
});
