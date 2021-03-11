import React, {useEffect, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GP_API_KEY} from '@env';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import LocationRow from '../../components/LocationRow';

const DestinationSearchScreen = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
  const homePlace = {
    description: 'Home',
    geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
  };
  const workPlace = {
    description: 'Work',
    geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
  };

  const navigation = useNavigation();
  const goToRideBookingScreen = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('RideBooking', {
        originPlace,
        destinationPlace,
      });
    }
  };

  useEffect(() => {
    goToRideBookingScreen();
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          styles={{
            textInput: styles.input,
            container: styles.fromContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          query={{
            key: GP_API_KEY,
            language: 'en',
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          fetchDetails
          predefinedPlaces={[homePlace, workPlace]}
          enableHighAccuracyLocation={true}
          currentLocation={true}
          currentLocationLabel="Current location"
          renderRow={(data) => <LocationRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
        />

        <GooglePlacesAutocomplete
          placeholder="Where To?"
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          styles={{
            textInput: styles.input,
            container: styles.toContainer,
            separator: styles.separator,
          }}
          query={{
            key: GP_API_KEY,
            language: 'en',
          }}
          enableHighAccuracyLocation={true}
          suppressDefaultStyles
          fetchDetails
          predefinedPlaces={[homePlace, workPlace]}
          renderRow={(data) => <LocationRow data={data} />}
        />
        {/* Dot near origin input*/}
        <View style={styles.dot}></View>
        {/* Line between dots*/}
        <View style={styles.line}></View>
        {/* Square near destination input*/}
        <View style={styles.square}></View>
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearchScreen;
