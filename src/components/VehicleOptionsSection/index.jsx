import React from 'react';
import {View, Text, Pressable} from 'react-native';
import VehicleOptionRow from '../VehicleOptionRow';

import types from '../../../assets/data/types';
import styles from './styles';

const VehicleOptions = () => {
  const onPressHandler = () => {};

  return (
    <View>
      {types.map((type) => (
        <VehicleOptionRow type={type} />
      ))}
      <Pressable onPress={onPressHandler} style={styles.button}>
        <Text style={styles.btnTxt}>Confirm Book</Text>
      </Pressable>
    </View>
  );
};

export default VehicleOptions;
