import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GP_API_KEY} from '@env';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import NewOrderPopup from '../../components/NewOrderPopup';

const HomeScreen = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [myLocation, setMyLocation] = useState(null);
  const [order, setOrder] = useState(null);
  const [newOrder, setNewOrder] = useState({
    id: '1',
    type: 'UberX',
    originLat: 1.47779,
    originLng: 103.63882,
    destinationLat: 1.47879,
    destinationLng: 103.63883,
    user: {
      username: 'John',
      rating: 5.0,
    },
  });

  const onDecline = () => {
    setNewOrder(null);
  };
  const onAccept = () => {
    setOrder(newOrder);
    setNewOrder(null);
  };

  const onPressGoBtn = () => {
    setIsOnline(!isOnline);
  };
  const onUserLocationChange = (event) => {
    const {latitude, longitude, heading} = event.nativeEvent.coordinate;

    setMyLocation({latitude, longitude});
  };

  const onDirectionFound = (e) => {
    if (order) {
      setOrder({
        ...order,
        distance: e.distance,
        duration: e.duration,
        pickedUp: order.pickedUp || e.distance < 0.2,
        isFinished: order.pickedUp && e.distance < 0.2,
      });
    }
  };

  const getDestination = () => {
    if (order && order.pickedUp) {
      return {
        latitude: order.destinationLat,
        longitude: order.destinationLng,
      };
    }
    return {
      latitude: order.originLat,
      longitude: order.originLng,
    };
  };

  const renderBottomTitle = () => {
    if (order && order.isFinished) {
      return (
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#cb1a1a',
              width: 200,
              padding: 10,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              COMPLETE {order.type}
            </Text>
          </View>
          <Text style={styles.bottomText}>{order.user.username}</Text>
        </View>
      );
    }
    if (order && order.pickedUp) {
      return (
        <View style={{alignItems: 'center'}}>
          <View style={styles.pickUpContainer}>
            <Text>{order.duration ? order.duration.toFixed(1) : '?'} min</Text>
            <View
              style={[
                styles.userBg,
                {
                  backgroundColor: '#d41212',
                },
              ]}>
              <FontAwesome name={'user'} color={'white'} size={20} />
            </View>
            <Text>{order.distance ? order.distance.toFixed(1) : '?'} km</Text>
          </View>
          <Text style={styles.bottomTxt}>
            Dropping off {order.user.username}
          </Text>
        </View>
      );
    }
    if (order) {
      return (
        <View style={{alignItems: 'center'}}>
          <View style={styles.pickUpContainer}>
            <Text>{order.duration ? order.duration.toFixed(1) : '?'} min</Text>
            <View style={styles.userBg}>
              <FontAwesome name={'user'} color={'white'} size={20} />
            </View>
            <Text>{order.distance ? order.distance.toFixed(1) : '?'} km</Text>
          </View>
          <Text style={styles.bottomTxt}>Picking up {order.user.username}</Text>
        </View>
      );
    }
    if (isOnline) {
      return (
        <Text style={styles.bottomTxt}>
          You're {isOnline ? 'online' : 'offline'}
        </Text>
      );
    }
  };

  return (
    <>
      <View style={{flex: 1}}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          onUserLocationChange={onUserLocationChange}
          initialRegion={{
            latitude: 1.47679,
            longitude: 103.63884,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
          }}>
          {order && (
            <MapViewDirections
              origin={myLocation}
              destination={getDestination()}
              onReady={onDirectionFound}
              apikey={GP_API_KEY}
              strokeWidth={3}
              strokeColor="black"
            />
          )}
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

          {renderBottomTitle()}

          <Entypo name="menu" size={24} color="#4a4a4a" />
        </View>
        {newOrder && (
          <NewOrderPopup
            newOrder={newOrder}
            duration={2}
            distance={0.5}
            onDecline={onDecline}
            onAccept={onAccept}
          />
        )}
      </View>
    </>
  );
};

export default HomeScreen;
