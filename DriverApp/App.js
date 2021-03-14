import React from 'react';
import {SafeAreaView, View} from 'react-native';
import HomeScreen from './src/screens/Home';
import {withAuthenticator} from 'aws-amplify-react-native';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default withAuthenticator(App);
