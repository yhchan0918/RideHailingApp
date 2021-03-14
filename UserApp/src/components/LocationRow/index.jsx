import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LocationRow = (props) => {
  const {data} = props;

  return (
    <View style={styles.row}>
      {data.description === 'Home' ? (
        <View style={[styles.iconContainer, {backgroundColor: '#3493ec'}]}>
          <Entypo name="home" size={20} color={'#fff'} />
        </View>
      ) : data.description === 'Work' ? (
        <View style={[styles.iconContainer, {backgroundColor: '#3493ec'}]}>
          <MaterialCommunityIcons
            name="office-building"
            size={20}
            color={'#fff'}
          />
        </View>
      ) : (
        <View style={styles.iconContainer}>
          <Entypo name="location-pin" size={20} color={'#fff'} />
        </View>
      )}

      <Text style={styles.locationTxt}>
        {data.description || data.vicinity}
      </Text>
    </View>
  );
};

export default LocationRow;
