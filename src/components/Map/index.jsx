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
      showsUserLocation={true}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      {cars.map((car) => (
        <CustomeMarker car={car} key={car.id} />
      ))}
    </MapView>
  );
};

export default HomeMap;
