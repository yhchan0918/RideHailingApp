import React, {useEffect} from 'react';
import {StatusBar, PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import DestinationSearchScreen from './src/screens/DestinationSearch/index.jsx';
import HomeScreen from './src/screens/Home/index.jsx';
import RideBookingScreen from './src/screens/RideBooking/index.jsx';

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
    // Geolocation.getCurrentPosition((info) => console.log(info));
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {<DestinationSearchScreen />}
      {/* <RideBookingScreen /> */}
    </>
  );
};

export default App;
