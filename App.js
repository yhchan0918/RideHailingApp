import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import RootNavigator from './src/navigation/Root.js';

navigator.geolocation = require('@react-native-community/geolocation');

const App: () => React$Node = () => {
  const requestLocationAndroidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Uber App Location Permission',
          message:
            'Uber App needs access to your Location ' +
            'so you can take awesome rides.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestLocationAndroidPermission();
    } else {
      //IOS
      Geolocation.requestAuthorization();
    }
  }, []);

  return (
    <>
      <RootNavigator />
    </>
  );
};

export default App;
