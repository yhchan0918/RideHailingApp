import React, {useEffect, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GP_API_KEY} from '@env';

import styles from './styles';

const DestinationSearchScreen = () => {
  const [fromPlace, setFromPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (fromPlace && destinationPlace) {
      console.warn('triggered');
    }
  }, [fromPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="From"
          onPress={(data, details = null) => {
            setFromPlace({data, details});
          }}
          styles={{
            textInput: styles.input,
          }}
          fetchDetails
          query={{
            key: GP_API_KEY,
            language: 'en',
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where To"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          styles={{
            textInput: styles.input,
          }}
          fetchDetails
          query={{
            key: GP_API_KEY,
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearchScreen;
