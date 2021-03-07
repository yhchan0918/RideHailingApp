import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import CovidAlert from '../../components/CovidAlert';
import Map from '../../components/Map';
import HomeSeachSection from '../../components/HomeSearchSection';

const HomeScreen = () => {
  return (
    <View>
      <Map />
      <CovidAlert />
      <HomeSeachSection />
    </View>
  );
};

export default HomeScreen;
