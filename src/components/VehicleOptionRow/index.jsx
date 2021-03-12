import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const VehicleOptionRow = (props) => {
  const {type, onPressHandler, isSelected} = props;
  const getImage = () => {
    if (type.type === 'UberX') {
      return require('../../../assets/images/UberX.jpeg');
    }
    if (type.type === 'Comfort') {
      return require('../../../assets/images/Comfort.jpeg');
    }
    return require('../../../assets/images/UberXL.jpeg');
  };
  return (
    <Pressable
      style={[
        styles.container,
        {backgroundColor: isSelected ? '#efefef' : '#fff'},
      ]}
      onPress={onPressHandler}>
      <Image style={styles.image} source={getImage()} />
      <View style={styles.middleContainer}>
        <Text style={styles.vehicleType}>
          {type.type} <Ionicons name="person" size={15} />3
        </Text>
        <Text style={styles.time}>8.30pm drop off</Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name="pricetag" size={18} color="#47d742" />
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </Pressable>
  );
};

export default VehicleOptionRow;
