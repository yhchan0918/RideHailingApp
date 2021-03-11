import React, {useEffect, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GP_API_KEY} from '@env';

import styles from './styles';
import SuggestionRow from '../../components/SuggestionRow';

const DestinationSearchScreen = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.warn('triggered');
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          enablePoweredByContainer={false}
          styles={{
            textInput: styles.input,
            container: styles.fromContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          suppressDefaultStyles
          fetchDetails
          query={{
            key: GP_API_KEY,
            language: 'en',
          }}
          renderRow={(data) => <SuggestionRow data={data} />}
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
          suppressDefaultStyles
          fetchDetails
          query={{
            key: GP_API_KEY,
            language: 'en',
          }}
          renderRow={(data) => <SuggestionRow data={data} />}
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
