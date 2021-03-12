import React from 'react';
import {View, Text, Pressable} from 'react-native';
import VehicleOptionRow from '../VehicleOptionRow';

import types from '../../../assets/data/types';
import styles from './styles';

const VehicleOptionsSection = (props) => {
  const {vehicleTypeState, onConfirmBook} = props;
  const [selectedType, setSelectedType] = vehicleTypeState;

  return (
    <View>
      {types.map((type) => (
        <VehicleOptionRow
          type={type}
          key={type.id}
          isSelected={type.type === selectedType}
          onPressHandler={() => setSelectedType(type.type)}
        />
      ))}
      <Pressable onPress={onConfirmBook} style={styles.button}>
        <Text style={styles.btnTxt}>Confirm Book</Text>
      </Pressable>
    </View>
  );
};

export default VehicleOptionsSection;
