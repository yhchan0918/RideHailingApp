import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import DestinationSearchScreen from './src/screens/DestinationSearch/index.jsx';
import HomeScreen from './src/screens/Home/index.jsx';
import RideBookingScreen from './src/screens/RideBooking/index.jsx';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {<DestinationSearchScreen />}
      {/* <RideBookingScreen /> */}
    </>
  );
};

export default App;
