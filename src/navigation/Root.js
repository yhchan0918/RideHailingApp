import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import DestinationSearchScreen from '../screens/DestinationSearch';
import RideBookingScreen from '../screens/RideBooking';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="DestinationSearch"
          component={DestinationSearchScreen}
        />
        <Stack.Screen name="RideBooking" component={RideBookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
