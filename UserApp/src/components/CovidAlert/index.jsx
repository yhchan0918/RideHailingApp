import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const CovidAlert = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.content}>
        Help flatten the curve. If you must travel, please exercise caution for
        your safety and the safety of our community
      </Text>
      <Text style={styles.learnMoreTxt}>Learn More</Text>
    </View>
  );
};

export default CovidAlert;
