import React, {useState, useEffect} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {API, graphqlOperation} from 'aws-amplify';
import {listCars} from '../../graphql/queries';

import CustomeMarker from '../CustomMarker';
import styles from './styles';

const HomeMap = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const allCars = await API.graphql(graphqlOperation(listCars));
        setCars(allCars.data.listCars.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCars();
  }, []);

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
