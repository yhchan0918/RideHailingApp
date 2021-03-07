import React from 'react';
import {View, Text} from 'react-native';

import Map from '../../components/Map';
import VehicleOptionsSection from '../../components/VehicleOptionsSection';
import styles from './styles';

const RideBookingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Map />
      </View>

      <View style={styles.bottomContainer}>
        <VehicleOptionsSection />
      </View>
    </View>
  );
};

export default RideBookingScreen;
