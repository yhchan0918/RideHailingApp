import React from 'react';
import {View, Text} from 'react-native';

import HomeMap from '../../components/HomeMap';
import VehicleOptionsSection from '../../components/VehicleOptionsSection';

const RideBookingScreen = () => {
  return (
    <View>
      <HomeMap />
      <VehicleOptionsSection />
    </View>
  );
};

export default RideBookingScreen;
