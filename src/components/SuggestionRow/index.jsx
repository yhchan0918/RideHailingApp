import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const SuggestionRow = (props) => {
  const {data} = props;
  console.log(data);
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Entypo name="location-pin" size={20} color={'#fff'} />
      </View>
      <Text style={styles.locationTxt}>{data.description}</Text>
    </View>
  );
};

export default SuggestionRow;
