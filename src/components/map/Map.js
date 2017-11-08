import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Footer from '../footer/Footer';
import MapView from 'react-native-maps';

export default class Map extends Component < {} > {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{flex: 1}}
          provider={MapView.PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 20.1342495,
            longitude: -98.8023,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          />
        <Footer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
