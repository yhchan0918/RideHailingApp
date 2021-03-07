import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import CustomeMarker from '../CustomMarker';

import styles from './styles';
import cars from '../../../assets/data/cars';

const HomeMap = () => {
  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {cars.map((car) => (
        <CustomeMarker car={car} />
      ))}
    </MapView>
  );
};

export default HomeMap;
