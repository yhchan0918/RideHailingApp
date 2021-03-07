import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import CovidAlert from '../../components/CovidAlert';
import HomeMap from '../../components/HomeMap';
import HomeSeachSection from '../../components/HomeSearchSection';

const HomeScreen = () => {
  return (
    <View>
      <HomeMap />
      <CovidAlert />
      <HomeSeachSection />
    </View>
  );
};

export default HomeScreen;
