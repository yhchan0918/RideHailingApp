import React, {useState} from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GP_API_KEY} from '@env';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};

const HomeScreen = () => {
  const [isOnline, setIsOnline] = useState(false);
  const onPressGoBtn = () => {
    setIsOnline(!isOnline);
  };
  return (
    <>
      <View>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          initialRegion={{
            latitude: 1.45802,
            longitude: 103.633,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
          }}>
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GP_API_KEY}
          />
        </MapView>
        <View style={styles.topContainer}>
          <Pressable style={styles.roundBtn}>
            <Entypo name="menu" size={24} color="#4a4a4a" />
          </Pressable>
          <Pressable style={styles.balanceBtn}>
            <Text style={styles.balanceTxt}>
              <Text style={{color: 'green'}}>$</Text> 0.00
            </Text>
          </Pressable>
          <Pressable style={styles.roundBtn}>
            <Entypo name="menu" size={24} color="#4a4a4a" />
          </Pressable>
        </View>

        <View style={styles.middleContainer}>
          <Pressable style={[styles.roundBtn]}>
            <Entypo name="menu" size={24} color="#4a4a4a" />
          </Pressable>
          <Pressable onPress={onPressGoBtn} style={[styles.goBtn]}>
            <Text style={styles.goTxt}>{isOnline ? 'END' : 'GO'}</Text>
          </Pressable>
          <Pressable style={[styles.roundBtn]}>
            <Entypo name="menu" size={24} color="#4a4a4a" />
          </Pressable>
        </View>

        <View style={styles.bottomContainer}>
          <Ionicons name={'options'} size={30} color="#4a4a4a" />
          <Text style={styles.bottomTxt}>
            You're {isOnline ? 'online' : 'offline'}
          </Text>
          <Entypo name="menu" size={24} color="#4a4a4a" />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
