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
    console.log(this.props);
    const {lista, noti} = this.props;
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

// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Dimensions,
//   Animated,
// } from 'react-native';
// import MapView from 'react-native-maps';
// import PanController from './PanController';
// import PriceMarker from './AnimatedPriceMarker';
//
// const screen = Dimensions.get('window');
// const ASPECT_RATIO = screen.width / screen.height;
// const LATITUDE = 37.78825;
// const LONGITUDE = -122.4324;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// const ITEM_SPACING = 10;
// const ITEM_PREVIEW = 10;
// const ITEM_WIDTH = screen.width - (2 * ITEM_SPACING) - (2 * ITEM_PREVIEW);
// const SNAP_WIDTH = ITEM_WIDTH + ITEM_SPACING;
// const ITEM_PREVIEW_HEIGHT = 150;
// const SCALE_END = screen.width / ITEM_WIDTH;
// const BREAKPOINT1 = 246;
// const BREAKPOINT2 = 350;
// const ONE = new Animated.Value(1);
//
// function getMarkerState(panX, panY, scrollY, i) {
//   const xLeft = (-SNAP_WIDTH * i) + (SNAP_WIDTH / 2);
//   const xRight = (-SNAP_WIDTH * i) - (SNAP_WIDTH / 2);
//   const xPos = -SNAP_WIDTH * i;
//
//   const isIndex = panX.interpolate({
//     inputRange: [xRight - 1, xRight, xLeft, xLeft + 1],
//     outputRange: [0, 1, 1, 0],
//     extrapolate: 'clamp',
//   });
//
//   const isNotIndex = panX.interpolate({
//     inputRange: [xRight - 1, xRight, xLeft, xLeft + 1],
//     outputRange: [1, 0, 0, 1],
//     extrapolate: 'clamp',
//   });
//
//   const center = panX.interpolate({
//     inputRange: [xPos - 10, xPos, xPos + 10],
//     outputRange: [0, 1, 0],
//     extrapolate: 'clamp',
//   });
//
//   const selected = panX.interpolate({
//     inputRange: [xRight, xPos, xLeft],
//     outputRange: [0, 1, 0],
//     extrapolate: 'clamp',
//   });
//
//   const translateY = Animated.multiply(isIndex, panY);
//
//   const translateX = panX;
//
//   const anim = Animated.multiply(isIndex, scrollY.interpolate({
//     inputRange: [0, BREAKPOINT1],
//     outputRange: [0, 1],
//     extrapolate: 'clamp',
//   }));
//
//   const scale = Animated.add(ONE, Animated.multiply(isIndex, scrollY.interpolate({
//     inputRange: [BREAKPOINT1, BREAKPOINT2],
//     outputRange: [0, SCALE_END - 1],
//     extrapolate: 'clamp',
//   })));
//
//   // [0 => 1]
//   let opacity = scrollY.interpolate({
//     inputRange: [BREAKPOINT1, BREAKPOINT2],
//     outputRange: [0, 1],
//     extrapolate: 'clamp',
//   });
//
//   // if i === index: [0 => 0]
//   // if i !== index: [0 => 1]
//   opacity = Animated.multiply(isNotIndex, opacity);
//
//
//   // if i === index: [1 => 1]
//   // if i !== index: [1 => 0]
//   opacity = opacity.interpolate({
//     inputRange: [0, 1],
//     outputRange: [1, 0],
//   });
//
//   let markerOpacity = scrollY.interpolate({
//     inputRange: [0, BREAKPOINT1],
//     outputRange: [0, 1],
//     extrapolate: 'clamp',
//   });
//
//   markerOpacity = Animated.multiply(isNotIndex, markerOpacity).interpolate({
//     inputRange: [0, 1],
//     outputRange: [1, 0],
//   });
//
//   const markerScale = selected.interpolate({
//     inputRange: [0, 1],
//     outputRange: [1, 1.2],
//   });
//
//   return {
//     translateY,
//     translateX,
//     scale,
//     opacity,
//     anim,
//     center,
//     selected,
//     markerOpacity,
//     markerScale,
//   };
// }
//
// class AnimatedViews extends React.Component {
//   constructor(props) {
//     super(props);
//
//     const panX = new Animated.Value(0);
//     const panY = new Animated.Value(0);
//
//     const scrollY = panY.interpolate({
//       inputRange: [-1, 1],
//       outputRange: [1, -1],
//     });
//
//     const scrollX = panX.interpolate({
//       inputRange: [-1, 1],
//       outputRange: [1, -1],
//     });
//
//     const scale = scrollY.interpolate({
//       inputRange: [0, BREAKPOINT1],
//       outputRange: [1, 1.6],
//       extrapolate: 'clamp',
//     });
//
//     const translateY = scrollY.interpolate({
//       inputRange: [0, BREAKPOINT1],
//       outputRange: [0, -100],
//       extrapolate: 'clamp',
//     });
//
//     const markers = [
//       {
//         id: 0,
//         amount: 99,
//         coordinate: {
//           latitude: LATITUDE,
//           longitude: LONGITUDE,
//         },
//       },
//       {
//         id: 1,
//         amount: 199,
//         coordinate: {
//           latitude: LATITUDE + 0.004,
//           longitude: LONGITUDE - 0.004,
//         },
//       },
//       {
//         id: 2,
//         amount: 285,
//         coordinate: {
//           latitude: LATITUDE - 0.004,
//           longitude: LONGITUDE - 0.004,
//         },
//       },
//     ];
//
//     const animations = markers.map((m, i) =>
//       getMarkerState(panX, panY, scrollY, i));
//
//     this.state = {
//       panX,
//       panY,
//       animations,
//       index: 0,
//       canMoveHorizontal: true,
//       scrollY,
//       scrollX,
//       scale,
//       translateY,
//       markers,
//       region: new MapView.AnimatedRegion({
//         latitude: LATITUDE,
//         longitude: LONGITUDE,
//         latitudeDelta: LATITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA,
//       }),
//     };
//   }
//
//   componentDidMount() {
//     const { region, panX, panY, scrollX, markers } = this.state;
//
//     panX.addListener(this.onPanXChange);
//     panY.addListener(this.onPanYChange);
//
//     region.stopAnimation();
//     region.timing({
//       latitude: scrollX.interpolate({
//         inputRange: markers.map((m, i) => i * SNAP_WIDTH),
//         outputRange: markers.map(m => m.coordinate.latitude),
//       }),
//       longitude: scrollX.interpolate({
//         inputRange: markers.map((m, i) => i * SNAP_WIDTH),
//         outputRange: markers.map(m => m.coordinate.longitude),
//       }),
//       duration: 0,
//     }).start();
//   }
//
//   onStartShouldSetPanResponder = (e) => {
//     // we only want to move the view if they are starting the gesture on top
//     // of the view, so this calculates that and returns true if so. If we return
//     // false, the gesture should get passed to the map view appropriately.
//     const { panY } = this.state;
//     const { pageY } = e.nativeEvent;
//     const topOfMainWindow = ITEM_PREVIEW_HEIGHT + panY.__getValue();
//     const topOfTap = screen.height - pageY;
//
//     return topOfTap < topOfMainWindow;
//   }
//
//   onMoveShouldSetPanResponder = (e) => {
//     const { panY } = this.state;
//     const { pageY } = e.nativeEvent;
//     const topOfMainWindow = ITEM_PREVIEW_HEIGHT + panY.__getValue();
//     const topOfTap = screen.height - pageY;
//
//     return topOfTap < topOfMainWindow;
//   }
//
//   onPanXChange = ({ value }) => {
//     const { index } = this.state;
//     const newIndex = Math.floor(((-1 * value) + (SNAP_WIDTH / 2)) / SNAP_WIDTH);
//     if (index !== newIndex) {
//       this.setState({ index: newIndex });
//     }
//   }
//
//   onPanYChange = ({ value }) => {
//     const { canMoveHorizontal, region, scrollY, scrollX, markers, index } = this.state;
//     const shouldBeMovable = Math.abs(value) < 2;
//     if (shouldBeMovable !== canMoveHorizontal) {
//       this.setState({ canMoveHorizontal: shouldBeMovable });
//       if (!shouldBeMovable) {
//         const { coordinate } = markers[index];
//         region.stopAnimation();
//         region.timing({
//           latitude: scrollY.interpolate({
//             inputRange: [0, BREAKPOINT1],
//             outputRange: [
//               coordinate.latitude,
//               coordinate.latitude - (LATITUDE_DELTA * 0.5 * 0.375),
//             ],
//             extrapolate: 'clamp',
//           }),
//           latitudeDelta: scrollY.interpolate({
//             inputRange: [0, BREAKPOINT1],
//             outputRange: [LATITUDE_DELTA, LATITUDE_DELTA * 0.5],
//             extrapolate: 'clamp',
//           }),
//           longitudeDelta: scrollY.interpolate({
//             inputRange: [0, BREAKPOINT1],
//             outputRange: [LONGITUDE_DELTA, LONGITUDE_DELTA * 0.5],
//             extrapolate: 'clamp',
//           }),
//           duration: 0,
//         }).start();
//       } else {
//         region.stopAnimation();
//         region.timing({
//           latitude: scrollX.interpolate({
//             inputRange: markers.map((m, i) => i * SNAP_WIDTH),
//             outputRange: markers.map(m => m.coordinate.latitude),
//           }),
//           longitude: scrollX.interpolate({
//             inputRange: markers.map((m, i) => i * SNAP_WIDTH),
//             outputRange: markers.map(m => m.coordinate.longitude),
//           }),
//           duration: 0,
//         }).start();
//       }
//     }
//   }
//
//   onRegionChange(/* region */) {
//     // this.state.region.setValue(region);
//   }
//
//   render() {
//     const {
//       panX,
//       panY,
//       animations,
//       canMoveHorizontal,
//       markers,
//       region,
//     } = this.state;
//
//     return (
//       <View style={styles.container}>
//         <PanController
//           style={styles.container}
//           vertical
//           horizontal={canMoveHorizontal}
//           xMode="snap"
//           snapSpacingX={SNAP_WIDTH}
//           yBounds={[-1 * screen.height, 0]}
//           xBounds={[-screen.width * (markers.length - 1), 0]}
//           panY={panY}
//           panX={panX}
//           onStartShouldSetPanResponder={this.onStartShouldSetPanResponder}
//           onMoveShouldSetPanResponder={this.onMoveShouldSetPanResponder}
//         >
//           <MapView.Animated
//             provider={this.props.provider}
//             style={styles.map}
//             region={region}
//             onRegionChange={this.onRegionChange}
//           >
//             {markers.map((marker, i) => {
//               const {
//                 selected,
//                 markerOpacity,
//                 markerScale,
//               } = animations[i];
//
//               return (
//                 <MapView.Marker
//                   key={marker.id}
//                   coordinate={marker.coordinate}
//                 >
//                   <PriceMarker
//                     style={{
//                       opacity: markerOpacity,
//                       transform: [
//                         { scale: markerScale },
//                       ],
//                     }}
//                     amount={marker.amount}
//                     selected={selected}
//                   />
//                 </MapView.Marker>
//               );
//             })}
//           </MapView.Animated>
//           <View style={styles.itemContainer}>
//             {markers.map((marker, i) => {
//               const {
//                 translateY,
//                 translateX,
//                 scale,
//                 opacity,
//               } = animations[i];
//
//               return (
//                 <Animated.View
//                   key={marker.id}
//                   style={[styles.item, {
//                     opacity,
//                     transform: [
//                       { translateY },
//                       { translateX },
//                       { scale },
//                     ],
//                   }]}
//                 />
//               );
//             })}
//           </View>
//         </PanController>
//       </View>
//     );
//   }
// }
//
// AnimatedViews.propTypes = {
//   provider: MapView.ProviderPropType,
// };
//
// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   itemContainer: {
//     backgroundColor: 'transparent',
//     flexDirection: 'row',
//     paddingHorizontal: (ITEM_SPACING / 2) + ITEM_PREVIEW,
//     position: 'absolute',
//     // top: screen.height - ITEM_PREVIEW_HEIGHT - 64,
//     paddingTop: screen.height - ITEM_PREVIEW_HEIGHT - 64,
//     // paddingTop: !ANDROID ? 0 : screen.height - ITEM_PREVIEW_HEIGHT - 64,
//   },
//   map: {
//     backgroundColor: 'transparent',
//     ...StyleSheet.absoluteFillObject,
//   },
//   item: {
//     width: ITEM_WIDTH,
//     height: screen.height + (2 * ITEM_PREVIEW_HEIGHT),
//     backgroundColor: 'red',
//     marginHorizontal: ITEM_SPACING / 2,
//     overflow: 'hidden',
//     borderRadius: 3,
//     borderColor: '#000',
//   },
// });
//
// module.exports = AnimatedViews;
