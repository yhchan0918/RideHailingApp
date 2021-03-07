import React from 'react';
import {Marker} from 'react-native-maps';

import {Image} from 'react-native';

const CustomeMarker = (props) => {
  const {car} = props;
  const getImage = () => {
    if (car.type === 'UberX') {
      return require('../../../assets/images/top-UberX.png');
    }
    if (car.type === 'Comfort') {
      return require('../../../assets/images/top-Comfort.png');
    }
    return require('../../../assets/images/top-UberXL.png');
  };
  return (
    <Marker coordinate={{latitude: car.latitude, longitude: car.longitude}}>
      <Image
        style={{width: 70, height: 70, resizeMode: 'contain'}}
        source={getImage()}
      />
    </Marker>
  );
};

export default CustomeMarker;
