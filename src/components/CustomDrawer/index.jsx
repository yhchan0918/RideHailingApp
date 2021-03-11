import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import styles from './styles';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        {/* User Row */}
        <View style={styles.userRow}>
          <View style={styles.profileImg}></View>
          <View tyle={styles.profileDetailContainer}>
            <Text style={styles.username}>YH Chan</Text>
            <Text style={styles.coins}>5.00 *</Text>
          </View>
        </View>
        {/* Messages Row */}
        <View style={styles.msgContainer}>
          <Pressable>
            <Text style={styles.msgTxt}>Messages</Text>
          </Pressable>
        </View>

        {/* Do More */}
        <Pressable>
          <Text style={styles.doMoreTxt}>Do more with your account</Text>
        </Pressable>
        {/* Make Money Driving Row */}
        <Pressable>
          <Text style={styles.makeMoneyTxt}>Make Money Driving</Text>
        </Pressable>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
