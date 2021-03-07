import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

const HomeSeachSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTxt}>Where To?</Text>

        <View style={styles.clockIconContainer}>
          <AntDesign name="clockcircle" size={16} color={'#535353'} />
          <Text>Now</Text>
          <MaterialIcons name="keyboard-arrow-down" size={16} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name="clockcircle" size={20} color={'#fff'} />
        </View>
        <Text style={styles.destinationTxt}>Spin NightClub</Text>
      </View>

      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
          <Entypo name="home" size={20} color={'#fff'} />
        </View>
        <Text style={styles.destinationTxt}>Home</Text>
      </View>
    </View>
  );
};

export default HomeSeachSection;
