import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GP_API_KEY} from '@env';

import styles from './styles';

const RouteMap = () => {
  const origin = {latitude: 28.450627, longitude: -16.263045};
  const destination = {latitude: 28.460127, longitude: -16.264045};

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <Marker coordinate={origin} />

      <Marker coordinate={destination} />
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GP_API_KEY}
        strokeWidth={3}
        strokeColor="black"
      />
    </MapView>
  );
};

export default RouteMap;
