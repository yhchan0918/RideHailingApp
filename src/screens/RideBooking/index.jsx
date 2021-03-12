import React, {useState} from 'react';
import {View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {API, graphqlOperation, Auth} from 'aws-amplify';

import {createOrder} from '../../graphql/mutations';
import RouteMap from '../../components/RouteMap';
import VehicleOptionsSection from '../../components/VehicleOptionsSection';
import styles from './styles';

const RideBookingScreen = () => {
  const vehicleTypeState = useState(null);

  const route = useRoute();
  const {origin, destination} = route.params;
  const onConfirmBook = async () => {
    const [type] = vehicleTypeState;
    if (!type) return;
    try {
      const userInfo = await Auth.currentAuthenticatedUser();
      const date = new Date();
      const inputData = {
        type,
        createdAt: date.toISOString(),
        originLat: origin.details.geometry.location.lat,
        originLng: origin.details.geometry.location.lng,
        destinationLat: destination.details.geometry.location.lat,
        destinationLng: destination.details.geometry.location.lng,
        userID: userInfo.attributes.sub,
      };

      const response = await API.graphql(
        graphqlOperation(createOrder, {input: inputData}),
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <RouteMap origin={origin} destination={destination} />
      </View>

      <View style={styles.bottomContainer}>
        <VehicleOptionsSection
          vehicleTypeState={vehicleTypeState}
          onConfirmBook={onConfirmBook}
        />
      </View>
    </View>
  );
};

export default RideBookingScreen;
