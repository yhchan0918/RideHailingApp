import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

import RouteMap from '../../components/RouteMap';
import VehicleOptionsSection from '../../components/VehicleOptionsSection';
import styles from './styles';

const RideBookingScreen = () => {
  const route = useRoute();
  const {origin, destination} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <RouteMap origin={origin} destination={destination} />
      </View>

      <View style={styles.bottomContainer}>
        <VehicleOptionsSection />
      </View>
    </View>
  );
};

export default RideBookingScreen;
