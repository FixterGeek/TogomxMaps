import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Animated,
    Dimensions,
    Platform
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Cabecera from '../comun/Cabecera';
import Footer from '../footer/Footer';
//redux
import {connect} from 'react-redux';
import {saveSelfPosition, notiFetch} from "../../actions/listaActions";
import MapStyles from './mapStyle.json';


const header = Platform.select({
    ios: <Cabecera/>,
});


const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;
const ASPECT_RADIO = width / height;
const LATITUDE_DELTA = 0.0150;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RADIO;
const image = "https://pbs.twimg.com/profile_images/719575066736889856/eL9HcziB_400x400.jpg";

class Map extends Component{

    state = {
        mapRegionInput:null,
        isFirstLoad:true,
        deliverPosition:{
            latitude: 0,
            longitude: 0
        },
        region: {
            latitude: 20.104989,
            longitude: -98.756323,
            longitudeDelta: 0.0043,
            latitudeDelta: 0.0034
        },
        markers:[
            {
                coordinate: {
                    latitude: 20.104989,
                    longitude: -98.756323
                },
                title: "Fixter",
                description:"This map does work",
                image
            },
            {
                coordinate: {
                    latitude: 20.1179517,
                    longitude: -98.7756557
                },
                title: "BlisS",
                description:"This map does work",
                image
            }
        ]
    };

    watchID: ? number = null;

    geoLocate = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }
                });
            },
            (error) => console.log(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
        this.watchID = navigator.geolocation.watchPosition(
            position => {
                let region = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                };
                //this.setState({region});
                this.props.saveSelfPosition(region);
                //console.log(region)
            }
        );

    };

    componentDidMount(){
        this.geoLocate();
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID)
    }

    componentWillMount(){
        this.props.notiFetch();
    }

    onRegionChange = (region) => {
        this.setState({
            region: undefined,
        });
    };





    render(){
        console.log(this.state.region);
        return(
            <View style={styles.container}>
                {/*header*/}
                <MapView
                    loadingEnabled
                    showsUserLocation={true}
                    ref={ref=>this.map = ref}
                    loadingIndicatorColor={"orange"}
                    style={styles.container}
                    customMapStyle={MapStyles}
                    provider={ PROVIDER_GOOGLE }
                    showsMyLocationButton
                    region={this.state.region || undefined}
                    //initialRegion={this.state.region}
                    onRegionChange={this.onRegionChange}
                    //onMapReady={()=>this.setState({regionSet:true})}
                    //onRegionChangeComplete={this.onRegionChange}


                >
                    {
                        this.props.tiendas.map((tienda, index)=>{
                            let notification =  this.props.noti.find(n=>n.tiendaId === tienda.firebaseKey);
                            let color = "orange";
                            if(notification) color = notification.has ? "green" : "orange";
                            return(
                                <MapView.Marker pinColor={color} title={tienda.title} key={index} coordinate={tienda.coord}/>
                            );
                        })
                    }


                </MapView>
                <Footer/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    markerWrap:{},
    ring:{},
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
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
});

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     scrollView: {
//         position: "absolute",
//         bottom: 30,
//         left: 0,
//         right: 0,
//         paddingVertical: 10,
//     },
//     endPadding: {
//         paddingRight: width - CARD_WIDTH,
//     },
//     card: {
//         padding: 10,
//         elevation: 2,
//         backgroundColor: "#FFF",
//         marginHorizontal: 10,
//         shadowColor: "#000",
//         shadowRadius: 5,
//         shadowOpacity: 0.3,
//         shadowOffset: { x: 2, y: -2 },
//         height: CARD_HEIGHT,
//         width: CARD_WIDTH,
//         overflow: "hidden",
//     },
//     cardImage: {
//         flex: 3,
//         width: "100%",
//         height: "100%",
//         alignSelf: "center",
//     },
//     textContent: {
//         flex: 1,
//     },
//     cardtitle: {
//         fontSize: 12,
//         marginTop: 5,
//         fontWeight: "bold",
//     },
//     cardDescription: {
//         fontSize: 12,
//         color: "#444",
//     },
//     markerWrap: {
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     marker: {
//         width: 8,
//         height: 8,
//         borderRadius: 4,
//         backgroundColor: "rgba(130,4,150, 0.9)",
//     },
//     ring: {
//         width: 24,
//         height: 24,
//         borderRadius: 12,
//         backgroundColor: "rgba(130,4,150, 0.3)",
//         position: "absolute",
//         borderWidth: 1,
//         borderColor: "rgba(130,4,150, 0.5)",
//     },
// });


function mapStateToProps(state, ownProps){
    console.log("notificaciones: ", state.noti)
    return{
        tiendas: state.tiendas,
        noti:state.noti
    }
}

export default Map = connect(mapStateToProps, {saveSelfPosition, notiFetch})(Map)