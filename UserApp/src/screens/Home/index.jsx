import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import CovidAlert from '../../components/CovidAlert';
import Map from '../../components/Map';
import HomeSeachSection from '../../components/HomeSearchSection';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Map />
      </View>
      <View style={styles.middleContainer}>
        <CovidAlert />
      </View>
      <View style={styles.bottomContainer}>
        <HomeSeachSection />
      </View>
    </View>
  );
};

export default HomeScreen;
